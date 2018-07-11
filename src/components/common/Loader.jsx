import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

class Loader extends Component {
    render() {
        if(this.props.loading){
            return (
                <div className='loader-container'>
                    <div className="loader">
                        <ClipLoader size={80}/>
                    </div>
                </div>
            )
        } else {
            return this.props.children;
        }
    }
}

Loader.propTypes = {
    loading : PropTypes.bool
};

export default Loader;
