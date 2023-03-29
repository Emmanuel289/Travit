import React, { useEffect } from 'react';
import { Button, FormField } from 'semantic-ui-react';
import { useImmerReducer } from 'use-immer';
import Axios from 'axios';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {

    const  initialState = {
        usernameValue: '',
        emailValue: '',
        passwordValue: '',
        sendRequest: 0,
        token: '',
    };

    const navigate = useNavigate();
    
    function ReducerFunction(draft, action){
        switch (action.type) {
            case "catchUsernameChange":
                draft.usernameValue = action.usernameChosen;
                break;
            case "catchEmailChange":
                draft.emailValue = action.emailChosen;
                break;
            case "catchPasswordChange":
                draft.passwordValue = action.passwordChosen;
                break;
            case "changeSendRequest":
                draft.sendRequest = action.sendRequest + 1;
                break;
            case "catchToken":
                draft.token = action.tokenValue;
                break;
        }
    }

    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

    useEffect(() => {
        if (state.sendRequest) {
            const source = Axios.CancelToken.source();
            async function SignIn() {
                try {
                    const response = await Axios.post('http://localhost:8000/api-auth-djoser/token/login/', 
                    {
                        username: state.usernameValue, 
                        password: state.passwordValue
                    }, 
                    {
                        cancelToken: source.token
                    }
                    );
                    console.log(response);
                    dispatch({type: "catchToken", tokenValue: response.data.auth_token});
                    navigate('/'.concat(state.usernameValue));
                } catch (error) {
                    console.log(error.response);
                }
            }
            SignIn();
            return () => {
                source.cancel();
            };
        }
    }, [state.sendRequest]);


    useEffect(() => {
        if (state.token !== '') {
            const source = Axios.CancelToken.source();
            async function GetUserInfo() {
                try {
                    const response = await Axios.get('http://localhost:8000/api-auth/users/me/', 
                    {
                        headers: {Authorization : 'Token '.concat(state.token)}
                    }, 
                    {
                        cancelToken: source.token
                    }
                    );
                } catch (error) {
                    console.log(error.response);
                }
            }
            GetUserInfo();
            return () => {
                source.cancel();
            };
        }
    }, [state.token]);


    const handleChangeUserName = (e) => {
        dispatch({
            type: "catchUsernameChange", 
            usernameChosen: e.target.value,
        });
    }

    const handleChangePassword = (e) => {
        dispatch({
            type: "catchPasswordChange",
            passwordChosen: e.target.value,
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "changeSendRequest", sendRequest: state.sendRequest });

    }
    return (
        <div className="signin">
            <form className="container" onSubmit={handleFormSubmit}>
                <FormField className="formfield">
                    <label className="label" htmlFor="username">
                        Username
                    </label>
                    <input className="input" name="username" value={state.username} onChange={handleChangeUserName}></input>
                </FormField>
                <FormField className="formfield">
                    <label className="label" htmlFor="password">
                        Password
                    </label>
                    <input className="input" name="password" type="password" value={state.password} onChange={handleChangePassword}></input>
                </FormField>
                <Button className='signin-signup-btn'>
                    Sign in
                </Button>
            </form>
        </div>
    );
};