import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';  

const defaultState = fromJS({
    imageList: [],
    offset: -625,
    picIndex: 0,
    isPlaying: true,
    articleList: [],
    haveMore: true,
    everyMoreShow:5,
    moreCount: 1,
    recommendList: [],
    writerList: [],
    writerPage: 1
});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_HOME_DATA:
            return state.merge({
                imageList: fromJS(action.imageList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            })
        case actionTypes.GET_PREV_PIC:
            return state.set('offset', action.offset).set('picIndex', action.picIndex) 
        case actionTypes.GET_NEXT_PIC:
            return state.set('offset', action.offset).set('picIndex', action.picIndex) 
        case actionTypes.GET_ANY_PIC:
            return state.set('offset', action.offset).set('picIndex', action.picIndex) 
        case actionTypes.PLAY_STATE_CHANGE:
            return state.set('isPlaying', action.data) 
        case actionTypes.GET_MORE_ARTICLE:
            return state.set('moreCount', action.count).set('haveMore', action.haveMore)
        case actionTypes.CHANGE_WRITER_PAGE:
            return state.set('writerPage', action.page)
        default:
            return state;
    }
}