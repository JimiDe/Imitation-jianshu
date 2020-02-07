import * as actionTypes from './actionTypes';
import axios from 'axios';

export const logout = () => ({
    type: actionTypes.LOGOUT,
    login: false
});


const logintAction = () => ({
    type: actionTypes.LOGIN,
    login: true
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('api/login.json?account=' + account + "&password=" + password).then((res) => {
            if(res.data.data){
                dispatch(logintAction());
            }
        }).catch((e) => {
            console.log(e);
        })
    }
}

