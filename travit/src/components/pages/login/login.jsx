import React, { useEffect } from 'react';
import { Button} from 'semantic-ui-react';
import { CheckboxFalse } from "./checkboxfalse";
import { useImmerReducer } from 'use-immer';
import { FillTrue } from "./filltrue";
import Axios from 'axios';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const server_url = 'https://api.travit.ca/auth/';

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
                    const response = await Axios.post(`${server_url}token/login/`,
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
                    const response = await Axios.get(`${server_url}users/me/`,
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
        <div className="login">
      <div className="div">
        <div
          className="group"
          style={{
            backgroundImage: "url(/src/assets/images/rectangle-20.jpg)",
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlap-group">
            <div className="frame">
              <div className="rectangle" />
              <div className="ellipse" />
              <div className="ellipse-2" />
            </div>
          </div>
        </div>
        <div className="frame-2">
          <div className="frame-3">
            <h1 className="h-1">Login</h1>
            <p className="p">Login to access your Travit account</p>
          </div>
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <div className="label-text">
                    <div className="label-text-2">Email</div>
                  </div>
                  <div className="text-field">
                    <div className="state-layer-wrapper">
                      <div className="state-layer">
                        <div className="content" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-8">
                  <div className="label-text-wrapper">
                    <div className="label-text-3">Password</div>
                  </div>
                  <div className="text-field-2">
                    <div className="div-wrapper">
                      <div className="state-layer-2">
                        <div className="content-2" />
                        <div className="trailing-icon">
                          <FillTrue
                            color="#666666"
                            style={{
                              height: "24px",
                              minWidth: "24px",
                              position: "relative",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-9">
                <div className="frame-10">
                  <CheckboxFalse
                    color="#333333"
                    style={{
                      height: "24px",
                      minWidth: "24px",
                      position: "relative",
                    }}
                  />
                  <div className="text-wrapper-2">Remember me</div>
                </div>
                <div className="text-wrapper-3">Forgot Password</div>
              </div>
            </div>
            <div className="frame-11">
              <Button
                buttonStyle={{
                  color: "#ffffff",
                  fontFamily: "'Montserrat-SemiBold', Helvetica",
                  fontWeight: "600",
                }}
                changeIcon="none"
                size="large"
                state="default"
                style={{
                  width: "512px",
                }}
                styleLayerStyle={{
                  alignSelf: "stretch",
                  backgroundColor: "#316bff",
                  borderRadius: "8px",
                  width: "unset",
                }}
                text="Login"
                type="filled"
              />
              <p className="don-t-have-an">
                <span className="span">Don’t have an account? </span>
                <span className="text-wrapper-4">Sign up</span>
              </p>
            </div>
            <div className="frame-12">
              <div className="rectangle-2" />
              <div className="text-wrapper-5">Or login with</div>
              <div className="rectangle-3" />
            </div>
            <div className="frame-13">
              <img className="img" alt="Frame" src="https://travit-images.s3.ca-central-1.amazonaws.com/images/facebook-vector.svg" />
              <img className="frame-14" alt="Frame" src="https://travit-images.s3.ca-central-1.amazonaws.com/images/flat-color-icons_google.svg" />
            </div>
          </div>
        </div>
        <div className="frame-15">
          <div className="text-wrapper-6">Travit</div>
          <img className="subtract" alt="Subtract" src="https://travit-images.s3.ca-central-1.amazonaws.com/images/subtract.jpg" />
        </div>
      </div>
    </div>
    );
};
