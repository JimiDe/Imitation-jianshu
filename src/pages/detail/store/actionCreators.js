import axios from 'axios';
import * as actionTypes from './actionTypes';

const getArticleDetail = (title, content) => ({
    type: actionTypes.GET_DETAIL,
    title,
    content

})
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/articleDetail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(getArticleDetail(result.title, result.content))
        }).catch((e) => {
            console.log(e);
        })
    }
}