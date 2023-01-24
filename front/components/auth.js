import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('token')
        if(value !== null) {
        return value;
        }
    } catch(e) {
        // error reading value
    }
    }

    const authReducer = (state, action) => {
        switch (action.type) {
          case 'signout':
            return {token: null, email: ''};
          case 'signin':
            console.log(action.payload.token);
            return {
                token: action.payload.token,
                email: action.payload.email,
            };
          case 'signup':
            return {
              token: action.payload.token,
            };
           case 'getHistory':
            return {
                balance: action.payload.data.balance,
                loading: action.payload.loading,
                history: action.payload.data.history,
            }

          default:
            return state;
        }
      };

      
      const signup = dispatch => {
        return ({email, password}) => {
          console.log('Signup');
        };
      };
      
      const signin = dispatch => {
        
        return (token) => {

          dispatch({
            type: 'signin',
            payload: {
              token: token,
            },
          });
        };
      };
      
      const signout = dispatch => {
        return () => {
          dispatch({type: 'signout'});
        };
      };

      const getHistory = dispatch => {
        return (token) => {

          dispatch({
            type: 'getHistory',
            payload: {
              data: data,
              loading: false,
            },
          });
        };
      };
      
      export const {Provider, Context} = createDataContext(
        authReducer,
        {signin, signout, signup, getHistory},
        {token: null, loading: true,balance: 0, data: []},
      );

export {getToken};
