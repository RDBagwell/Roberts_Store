import React, {Component} from 'react';

import FormInput from '../../formComponents/FormInput/FormInput';
import CustomButton from '../../Buttons/CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';

import './signup.scss';

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          };
    }
    
    handleSubmit  = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState(
                {                
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            );
        } catch (error) {
            console.log(error)
        }


    }

    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className = 'sign-up-form' onSubmit={this.handleSubmit } >
                    <FormInput name="displayName" type="text" onChange={this.handleChange} value={displayName} lable="Display Name" required />    
                    <FormInput name="email" type="email" onChange={this.handleChange} value={email} lable="Email" required />
                    <FormInput name="password" type="password" onChange={this.handleChange} value={password} lable="Password"  required />
                    <FormInput name="confirmPassword" type="password" onChange={this.handleChange} value={confirmPassword} lable="Confirm Password" required/>
                    <div className='buttons'>
                        <CustomButton type="submit">SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;