import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_DETAILS_RESET,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from '../contsants/userConstants'
import axios from 'axios'
import { data } from 'autoprefixer';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // const { data } = await axios.get(
        //     '/api/users/login',
        //     {email, password},
        //     config
        // )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: "NICE"
        })

        localStorage.setItem('userInfo', "NICE")
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');

    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // const { data } = await axios.post(
        //     '/api/users/',
        //     { name, email, password },
        //     config
        // )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: "DONE"
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: "DONE"
        })

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}