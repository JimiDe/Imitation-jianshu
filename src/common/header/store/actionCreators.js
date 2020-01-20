import * as actionTypes from './actionTypes';
import axios from 'axios';

const getSearchList = (data) => ({
    type: actionTypes.CHANGE_SEARCH_LIST,
    data,
    totalPage: Math.ceil(data.length/10)   //向上取整，返回大于或等于一个给定数字的最小整数
})

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})
export const searchAreaMouseEnter = () => ({
    type: actionTypes.SEARCH_AREA_MOUSE_ENTER
})
export const searchAreaMouseLeave = () => ({
    type: actionTypes.SEARCH_AREA_MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
})

export const getSeachInfoList = () => {
    return (dispatch) => {
        axios.get('api/searchInfoList.json').then((res) => {
            const data = res.data;
            dispatch(getSearchList(data.data));
        }).catch((e) => {
            console.log("error" + e);
        })    
    }
}