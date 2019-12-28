import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () =>({
    type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})
const getSearchList = (data) => ({
    type: actionTypes.CHANGE_SEARCH_LIST,
    data: fromJS(data)
})

export const getSeachInfoList = () => {
    return (dispatch) => {
        axios.get('api/searchInfoList.json').then((res) => {
            const data = res.data;
            dispatch(getSearchList(data.data));
        }).catch(() => {
            console.log("error");
        })    
    }
}