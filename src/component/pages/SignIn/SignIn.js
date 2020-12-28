import React, {Component} from 'react';
import FormInput from '../../formComponents/FormInput/FormInput';
import CustomButton from '../../Buttons/CustomButton/CustomButton';
import {auth, signInwithGoogle} from '../../../firebase/firebase.utils';

import './signIn.scss';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error){
            console.log(error);
        }
        
    }

    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email an password</span>    

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} lable="Email" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} lable="Password"  required />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInwithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>            
            </div>
        )
    }
}

export default SignIn;