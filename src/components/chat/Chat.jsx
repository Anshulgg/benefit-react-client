import React, {Component} from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import {connect} from 'react-redux';
import moment from 'moment';
import {fetchChat} from "../../actions/chatActions";
import {convertTimestampToDate} from "../../utils/time";

import './Chat.css';
import {fetchMyClients} from "../../actions/clientAction";


// let client = '5b1bd44433afa84b04ebedca';
const socket = io("http://localhost:5000/", {
    query: {
        token: localStorage.getItem('token'),
        // room: client
    }
});

socket.on('connect', function () {
    console.log('check 2', socket.connected);
});

socket.on('connect_failed', function () {
    console.log('Connection Failed');
});

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messages: [],
            selectedClient: {}
        };
        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    el = undefined;

    scrollToBottom = () => {
        // console.log(this.el);
        this.el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    };
    //
    // componentDidMount() {
    //     this.scrollToBottom();
    // }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentWillMount() {


        if (this.props.clients.allIds.length === 0) {
            this.props.fetchMyClients().then(() => {
                console.log("Clients Fetched");
            });
        } else {
            // fetchChat(client).then(messages => {
            //     this.setState({messages: messages});
            // });
        }

        socket.on('new message', (data) => {
            // console.log('fjhfajfjhasdjashdjhkadjhkasdjk');
            this.setState({
                messages: [...this.state.messages, data]
            });
        });
    }

    handleClick() {
        let newMessage = {
            // room : client ,
            message: this.state.message,
            author: 1,
            timestamp: moment().valueOf()
        };

        socket.emit('new message', newMessage);
        this.setState({
            messages: [...this.state.messages, newMessage],
            message: ''
        });
    }

    handleClientSelect(client) {

        socket.emit('room', client);

        console.log("Fetching Chat for Client :", client);
        fetchChat(client).then(messages => {
            this.setState({
                messages: messages,
                selectedClient: this.props.clients.byId[client]
            });
        });
    }

    updateInputValue(evt) {
        this.setState({
            message: evt.target.value
        });
    }

    render() {

        console.log(this.props.clients);
        let client;

        return (
            <div className='chat-container'>
                <div className="container clearfix">
                    <div className="people-list" id="people-list">
                        <div className="search">
                            <input type="text" placeholder="search"/>
                            <i className="fa fa-search"/>
                        </div>

                        <ul className="list">
                            {
                                this.props.clients.allIds.map((clientId, index) => {
                                    // console.log(client);
                                    client = this.props.clients.byId[clientId];
                                    return (
                                        <li className="clearfix" key={index} onClick={() => {
                                            this.handleClientSelect(clientId);
                                        }}>
                                            <img
                                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
                                                alt="avatar"/>
                                            <div className="about">
                                                <div className="name">{client.name}</div>
                                                <div className="status">
                                                    <i className="fa fa-circle online"/> online
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                            {/*<li className="clearfix">*/}
                            {/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"*/}
                            {/*alt="avatar"/>*/}
                            {/*<div className="about">*/}
                            {/*<div className="name">Vincent Porter</div>*/}
                            {/*<div className="status">*/}
                            {/*<i className="fa fa-circle online"/> online*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*</li>*/}
                        </ul>
                    </div>

                    <div className="chat">
                        <div className="chat-header clearfix">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
                                 alt="avatar"/>

                            <div className="chat-about">
                                <div className="chat-with">Chat with {this.state.selectedClient.name || "Clients"}</div>
                                {/*<div className="chat-num-messages">already 1 902 messages</div>*/}
                            </div>
                            <i className="fa fa-star"/>
                        </div>

                        <div className="chat-history">
                            <ul>
                                {
                                    this.state.messages.map((message, index) => {
                                        // console.log(message);
                                        let stringDate = convertTimestampToDate(message.timestamp);
                                        if (message.author === 0) {
                                            return (
                                                <li className="clearfix" key={index}>
                                                    <div className="message-data align-right">
                                                        <span
                                                            className="message-data-time">{stringDate}</span> &nbsp; &nbsp;
                                                        <span
                                                            className="message-data-name">{this.state.selectedClient.name}</span>
                                                        <i
                                                            className="fa fa-circle me"/>

                                                    </div>
                                                    <div className="message other-message float-right">
                                                        {message.message}
                                                    </div>
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li className='clearfix' key={index}>
                                                    <div className="message-data">
                                                        <span className="message-data-name"><i
                                                            className="fa fa-circle online"/>Me</span>
                                                        <span className="message-data-time">{stringDate}</span>
                                                    </div>
                                                    <div className="message my-message">
                                                        {message.message}
                                                    </div>
                                                </li>
                                            );
                                        }
                                    })
                                }
                            </ul>
                            <div ref={(el) => this.el = el}>
                                &nbsp;
                            </div>
                        </div>
                        <div className="chat-message clearfix">
                        <textarea name="message-to-send" id="message-to-send" placeholder="Type your message"
                                  rows="3" value={this.state.message} onChange={this.updateInputValue}/>

                            <i className="fa fa-file-o"/> &nbsp;&nbsp;&nbsp;
                            <i className="fa fa-file-image-o"/>

                            <button onClick={this.handleClick}>Send</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Chat.propTypes = {};

let mapStateToProps = (state) => {
    return {
        clients: state.clients
    };
};


export default connect(mapStateToProps, {
    fetchMyClients
})(Chat);
