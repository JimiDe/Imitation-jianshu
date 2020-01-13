import { fromJS } from 'immutable';
import showImg1 from '../../../statics/show1.png';
import showImg2 from '../../../statics/show2.png';
import showImg3 from '../../../statics/eat.jpg';
import showImg4 from '../../../statics/girl.jpg';  
import * as actionTypes from './actionTypes';  

const defaultState = fromJS({
    image: [
    {
        id: 0,
        title: '简书2019年度总结',
        pic: showImg1,
    },
    {
        id: 1,
        title: '2020元的徽章',
        pic: showImg2,
    },
    {
        id: 2,
        title: '吃货',
        pic: showImg3,
    },
    {
        id: 3,
        title: '女孩',
        pic: showImg4,
    }],
    offset: -625,
    picIndex: 0,
    isPlaying: true

});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_PREV_PIC:
            return state.set("offset", action.offset).set("picIndex", action.picIndex) 
        case actionTypes.GET_NEXT_PIC:
            return state.set("offset", action.offset).set("picIndex", action.picIndex) 
        case actionTypes.GET_ANY_PIC:
            return state.set("offset", action.offset).set("picIndex", action.picIndex) 
        case actionTypes.PLAY_STATE_CHANGE:
            return state.set("isPlaying", action.data) 
        default:
            return state;
    }
}