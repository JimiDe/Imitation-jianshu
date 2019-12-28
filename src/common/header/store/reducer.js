import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state=defaultState, action) => {
    if(action.type === actionTypes.SEARCH_FOCUS){
        return state.set("focused", true)
    }
    if(action.type === actionTypes.SEARCH_BLUR){
        return state.set("focused", false)
    }
    if(action.type === actionTypes.CHANGE_SEARCH_LIST){
        // 要注意action.data也要是immutable类型。
        console.log(action.data);
        return state.set("list", action.data)
    }
    return state;
}