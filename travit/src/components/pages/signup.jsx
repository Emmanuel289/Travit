import React, { useState, useReducer, useEffect} from 'react';
import { Button, FormField } from 'semantic-ui-react';
import Axios from 'axios';
import './styles.css';

export const SignUp = () => {

    const server_url = 'https://api.travit.ca/api-auth-djoser/';

    const initialState = {
        usernameValue: '',
        emailValue: '',
        passwordValue: '',
        secondpasswordValue: '',
        sendRequest: 0,
    }

    const [sendRequest, setSendRequest] = useState(false);
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [secondpasswordValue, setSecondPasswordValue] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        setSendRequest(!sendRequest);
    }

    useEffect(() => {
        if (sendRequest){
            const source = Axios.CancelToken.source();
            async function SignUp(){
                try {
                    const response = await Axios.post(
                        `${server_url}users/`,
                        {
                            username: usernameValue,
                            email: emailValue,
                            password: passwordValue,
                            re_password: secondpasswordValue,
                        },
                        {
                            cancelToken: source.token,
                        }
                        );
                        console.log(response);
                    } catch (error) {
                        console.log(error.response);
                    }
                }
                SignUp();
                return () => {
                    source.cancel();
                };
            }
        }, [sendRequest]);

    const handleChangeUserName = (e) => {
        setUsernameValue(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value);
        // dispatch({type: 'catchEmailChange', emailChosen: e.target.value})
    }

    const handleChangePassword = (e) => {
        setPasswordValue(e.target.value);
        // dispatch({type: 'catchPasswordChange', passwordChosen: e.target.value});
    }

    const handleChangeConfirmPassword = (e) => {
        setSecondPasswordValue(e.target.value);
        // dispatch({type: 'catchConfirmPasswordChange', confirmPasswordChosen: e.target.value})
    }


    function reducer(draft, action){
        switch(action.type){
            case 'catchUsernameChange':
                draft.usernameValue = action.usernameChosen;
                break;
            case 'catchEmailChange':
                draft.emailValue = action.emailChosen
                break;
            case 'catchPasswordChange':
                draft.passwordValue = action.passwordChosen;
                break;
            case 'catchConfirmPasswordChange':
                draft.secondpasswordValue = action.confirmPasswordChosen;
                break;
            case 'changeSendRequest':
            draft.sendRequest = draft.sendRequest + 1;
        }

    }


        return (
        <div className='signup'>
            <form className="container" onSubmit={handleFormSubmit}>
                <FormField className="formfield">
                    <label className="label" htmlFor="name">
                        Username
                    </label>
                    <input className="input" name="name" value={usernameValue} onChange={handleChangeUserName}></input>
                </FormField>
                <FormField className="formfield">
                    <label className="label" htmlFor="email">
                        Email
                    </label>
                    <input className="input" name="email" type="email" value={emailValue} onChange={handleChangeEmail} ></input>
                </FormField>
                <FormField className="formfield">
                    <label className="label" htmlFor="password">
                        Password
                    </label>
                    <input className="input" name="password" type="password" value={passwordValue} onChange={handleChangePassword}></input>
                </FormField>
                <FormField className="formfield">
                    <label className="label" htmlFor="confirm password">
                        Confirm Password
                    </label>
                    <input className="input" name="password" type="password" value={secondpasswordValue} onChange={handleChangeConfirmPassword}></input>
                </FormField>
                <Button className='signin-signup-btn'>
                    Sign up
                </Button>
            </form>
        </div>
    );
};
