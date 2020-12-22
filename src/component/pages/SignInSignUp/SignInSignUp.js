import React from 'react';

import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

import './signInSingUp.scss';


const SignInSignUp = ()=>{
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp;