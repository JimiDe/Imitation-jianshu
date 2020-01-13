import * as actionTypes from './actionTypes';

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