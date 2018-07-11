import { SET_ALL_CLIENTS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    byId : {},
    allIds : []
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_ALL_CLIENTS :
            let allIds = [] ;
            let map = {} ;
            action.clients.map(client => {
                map[client._id] = client ;
                allIds.push(client._id) ;
            })
            return {
                byId: map ,
                allIds : allIds
            }


        default: return state;
    }
}
