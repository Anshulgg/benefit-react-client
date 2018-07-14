import React, {Component} from 'react';
import {Row, DatePicker, Col} from 'antd' ;
import moment from "moment/moment";
import WorkoutAdd from '../common/WorkoutAdd';

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;


class Training extends Component {

    state = {
        startDate: null,
        endDate: null,
    };

    generateCards(startDate, endDate) {

        if (!startDate || !endDate) {
            return;
        }

        console.log("Client in Render", this.props.client);
        let requestClientId = this.props.match.params.id;
        let cards = [];

        for (let i = startDate; startDate.isBefore(endDate); startDate.add('days', 1)) {
            let date = startDate.format('DD-MM-YYYY');
            console.log(date);

            cards.push((
                <Col key={i} span={24}>
                    <WorkoutAdd date={date} clientId={requestClientId}/>
                </Col>)
            );
        }
        return cards;

    }

    onChange = ([startDate, endDate], [startDateString, endDateString]) => {
        // let cards = this.generateCards(startDate , endDate);
        this.setState({
            startDate,
            endDate
        });


    };

    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <RangePicker onChange={this.onChange}/>
                    </Col>
                </Row>
                <div className="cards">
                    {this.generateCards(this.state.startDate , this.state.endDate)}
                </div>
            </div>
        );
    }
}

export default Training;
