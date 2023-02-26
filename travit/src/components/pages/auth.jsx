import React from 'react';
import { Button, FormField } from 'semantic-ui-react';
import './styles.css';

export const SignUp = () => {

    const initialState = {
        name: '',
        email: '',
        username: '',
        password: '',
    }

    const [state, setState] = React.useState(initialState);

    const handleChangeName = (e) => {
        setState({
          name: e.target.value,
        })
    }

    const handleChangeEmailUserName = (e) => {
        setState({
            email: e.target.value,
            username: e.target.value,
        })
    }

    const handleChangePassword = (e) => {
        setState({
            password: e.target.value,
        })
    }


    const onFormSubmitted = () => {

        return <div>Sign up</div>
    }
    return (
        <div className='signup'>
            <form className="container" onSubmit={onFormSubmitted}>
                <FormField className="formfield">
                    <label className="label" htmlFor="name">
                        Name
                    </label>
                    <input className="input" name="name" value={state.name} onChange={handleChangeName}></input>
                </FormField>
                <FormField className="formfield">
                    <label className="label" htmlFor="password">
                        Email or Username
                    </label>
                    <input className="input" name="username" type="email" value={state.email || state.username} onChange={handleChangeEmailUserName}></input>
                </FormField>
                <FormField className="formfield">
                    <label className="label" htmlFor="password">
                        Password
                    </label>
                    <input className="input" name="password" type="password" value={state.password} onChange={handleChangePassword}></input>
                </FormField>
                <Button className='signin-btn'>
                    Sign up
                </Button>
            </form>
        </div>
    );
};



export const SignIn = () => {

    const initialState = {
        username: '',
        password: '',
        error: undefined,
    }

    const [state, setState] = React.useState(initialState);


    const handleChangeUserName = (e) => {
        setState({
          username: e.target.value,
        })
    }

    const handleChangePassword = (e) => {
        setState({
            password: e.target.value,
        })
    }

    const handleLogin = () => {
      if (state.username !== 'emmirald' && state.password !== 'abcd'){
        console.log('Invalid credentials');
      } else {
        console.log('login succeeded');
      }
    }
    const onFormSubmitted = (e) => {
        e.preventDefault()
        const { username, password } = state;

        let missingError; 

        if(!username) {
            missingError = 'Email address is Missing';

        } else if (!password) {
            missingError = 'Password is Missing'
        }

        if (missingError) {
            setState({
                error: missingError,
            })
        } else {
            setState({
                error: undefined,
            })
        }

        handleLogin({
            username,
            password,
        })

    }


    return (
        <div className="signin">
            <form className="container" onSubmit={onFormSubmitted}>
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
                <Button className='signin-btn'>
                    Sign in
                </Button>
            </form>
        </div>
    );
};