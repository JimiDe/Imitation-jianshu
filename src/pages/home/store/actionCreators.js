import * as actionTypes from './actionTypes';
import axios from 'axios';

const getHomeData = (result) => ({
    type: actionTypes.GET_HOME_DATA,
    imageList: result.imageList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})
export const getPrev = (offset, picIndex) => ({
    type: actionTypes.GET_PREV_PIC,
    offset,
    picIndex
})  
export const getNext = (offset, picIndex) => ({
    type: actionTypes.GET_NEXT_PIC,
    offset,
    picIndex
})
export const getAny= (offset, picIndex) => ({
    type: actionTypes.GET_ANY_PIC,
    offset,
    picIndex
})
export const playingChange = (isPlaying) => ({
    type: actionTypes.PLAY_STATE_CHANGE,
    data: isPlaying
})
export const getMore = (count, haveMore) => ({
    type: actionTypes.GET_MORE_ARTICLE,
    count,
    haveMore
})
export const changeWriterPage = (page) => ({
    type: actionTypes.CHANGE_WRITER_PAGE,
    page
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('api/home.json').then((res) => {
            const data = res.data.data;
            dispatch(getHomeData(data));
        }).catch((e) => {
            console.log("error" + e);
        })
    }
}