import React from 'react';
import './sign-in.styles.scss';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';
import {signInWithGoogle, auth} from '../../firebase/firebase.utills'; 
class SignIn extends React.Component{
    constructor(){
        super();

        this.state={
            email:'',
            password:'',
        }
    }
    handleSubmit= async event=>{
        event.preventDefault();

        const { email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            alert("SIGN IN Sucessfully");
            this.setState({ email: '', password: ''});
        } catch(error){
            alert(error.message);
            console.log(error.message);

        }    

        
    }
    handleChange=event=>{
        const { value , name } = event.target;

        this.setState({[name]:value })
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FromInput 
                       type="email" 
                       name="email"
                       value={this.state.email}
                       handleChange={this.handleChange}
                       label='Email'
                       required />
                    
                    <FromInput 
                       type="password" 
                       name="password" 
                       value={this.state.password} 
                       handleChange={this.handleChange}
                       label='Password'
                       required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In Wth Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;