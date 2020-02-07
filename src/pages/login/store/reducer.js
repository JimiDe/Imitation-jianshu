import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    login: true
})

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.LOGOUT:
            return state.set('login', action.login)
        case actionTypes.LOGIN:
            return state.set('login', action.login)
        default: 
            return state
    }
}