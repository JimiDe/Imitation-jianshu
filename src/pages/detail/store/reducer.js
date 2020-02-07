import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    title: '',
    content: ''
});
export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_DETAIL:
            return state.merge({
                title: fromJS(action.title),
                content: fromJS(action.content)
            })
        default:
            return state;
    }
}