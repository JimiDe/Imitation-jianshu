import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';  

const defaultState = fromJS({
    imageList: [],
    offset: -625,
    picIndex: 0,
    isPlaying: true,
    articleList: [],
    articlePage: 1,
    recommendList: [],
    writerList: [],
    writerPage: 1,
    scrollShow: false
});

const getHomeData = (state, action) => {
    return state.merge({
        imageList: fromJS(action.imageList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    })
};
const getPrevPic = (state, action) => {
    return state.merge({
        offset: action.offset,
        picIndex: action.picIndex
    })
};
const getNextPic = (state, action) => {
    return state.merge({
        offset: action.offset,
        picIndex: action.picIndex
    })
};
const getAnyPic = (state, action) => {
    return state.merge({
        offset: action.offset,
        picIndex: action.picIndex
    })
};
const getMoreArticle = (state, action) => {
    return state.merge({
        articlePage: action.nextPage,
        articleList: state.get('articleList').concat(fromJS(action.articleList))
    })
};
export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_HOME_DATA:
            return getHomeData(state, action)
        case actionTypes.GET_PREV_PIC:
            return getPrevPic(state, action)
        case actionTypes.GET_NEXT_PIC:
            return getNextPic(state, action)
        case actionTypes.GET_ANY_PIC:
            return getAnyPic(state, action)
        case actionTypes.PLAY_STATE_CHANGE:
            return state.set('isPlaying', action.data) 
        case actionTypes.GET_MORE_ARTICLE:
            return getMoreArticle(state,action)
        case actionTypes.CHANGE_WRITER_PAGE:
            return state.set('writerPage', action.page)
        case actionTypes.CHANGE_SCROLL_SHOW:
            return state.set('scrollShow', action.data)
        default:
            return state;
    }
}