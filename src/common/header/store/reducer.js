import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    mouseEnter: false,
    page: 1,
    totalPage: 1
});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set("focused", true)
        case actionTypes.SEARCH_BLUR:
            return state.set("focused", false)
        case actionTypes.CHANGE_SEARCH_LIST:
            // return state.set("list", fromJS(action.data)).set("totalPage", action.totalPage)
            // 多次set，可使用api：merge()
            return state.merge({
                list: fromJS(action.data),
                totalPage: action.totalPage
            })
        case actionTypes.SEARCH_AREA_MOUSE_ENTER:
            return state.set("mouseEnter", true)
        case actionTypes.SEARCH_AREA_MOUSE_LEAVE:
            return state.set("mouseEnter", false)
        case actionTypes.CHANGE_PAGE:
            return state.set("page", action.page)
        default:
            return state;
    }
    
}