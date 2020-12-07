import React, {Component} from 'react';

import './signIn.scss';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email an password</span>                
            </div>
        )
    }
}

export default SignIn;