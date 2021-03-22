import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  KcApp,
  defaultKcProps,
  kcContext as realKcContext,
  kcContextMocks
} from "keycloakify";
import { css } from "tss-react";
import "./fonts.scss";

const kcContext = realKcContext ?? (
  false /* Set to true to test the login pages outside of Keycloak */
    ? kcContextMocks.kcLoginContext /* Change to .kcRegisterContext for example */
    :
    undefined
);

console.log(kcContext);

ReactDOM.render(
  kcContext !== undefined ?
    <Login /> :
    <App />,
  document.getElementById("root")
);

function Login() {

  if (kcContext === undefined) {
    throw new Error();
  }

  return (
    <>
      <div id="foobar" style={{ "width": "200px", "height": "200px" }}>Test that background image url works</div>
      <h1 style={{ "fontFamily": '"Work Sans"' }}>Test that the font apply</h1>
      <KcApp
        kcContext={kcContext}
        {...{
          ...defaultKcProps,
          "kcHeaderWrapperClass": css({ "color": "red" })
        }}
      />
    </>

  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
