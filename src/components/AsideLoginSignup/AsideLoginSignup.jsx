import React from 'react';
import '../normalize.css';
import './AsideLoginSignup.css';
import LoginForm from '../LoginForm/LoginForm.jsx';
import SignupForm from '../SignupForm/SignupForm.jsx';

const AsideLoginSignup = props => (
  <div id="AsideLoginSignupContainer">

    <div id="sidebarButton">
      <button id="sidebarButtonText" onClick={props.changeSidebar}>{props.buttonText}</button>
    </div>

    <div id={props.sidebar}>
        <SignupForm
          signupUsername={props.signupUsername}
          updateSignupFormUsername={props.updateSignupFormUsername}
          signupPassword={props.signupPassword}
          updateSignupFormPassword={props.updateSignupFormPassword}
          handleSignupFormSubmit={props.handleSignupFormSubmit}
        />

        <LoginForm
          loginUsername={props.loginUsername}
          updateLoginFormUsername={props.updateLoginFormUsername}
          loginPassword={props.loginPassword}
          updateLoginFormPassword={props.updateLoginFormPassword}
          handleLoginFormSubmit={props.handleLoginFormSubmit}
        />
    </div>

  </div>
    );

export default AsideLoginSignup;
