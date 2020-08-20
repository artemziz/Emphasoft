import React from 'react';
import {connect} from 'react-redux';
import {username,password} from '../../config/config';
import './Login.scss';
import {userAuth} from '../../redux/actions/userAuth';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:username,
            usernameError:'',
            password:password,
            passwordError:'',
            authError:''
        }
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }
    checkFields = () =>{
        let isError = false;
        const usernamePattern = /^[\w.@+-]+$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
       
        if(this.state.username.length>150 || !usernamePattern.test(this.state.username)){
            this.setState({
                usernameError:'Field is required.150 characters or fewer. Letters, digits and @/./+/-/_ only.'
            })
            isError = true;
        }else{
            this.setState({
                usernameError:''
            })
        }
        
        if(this.state.password.length>128 || !passwordPattern.test(this.state.password)){
            this.setState({
                passwordError:'Field is required.128 characters or fewer. Letters, digits and @/./+/-/_ only'
            })
            isError = true;
        }else{
            this.setState({
                passwordError:''
            })
        }
        if(isError){
            this.setState({
                username:'',
                password:'',
                authError:''
            })
            return true;
        }else{
            return false;
        } 
    }
    handleSubmit = event => {
        event.preventDefault();
        if(!this.checkFields()){
            this.props.userAuth({
                username:this.state.username,
                password:this.state.password
            }).then(({error}) =>{
                if(error) this.setState({
                    authError:error
                })
            });
            
            this.setState({
                username:'',
                usernameError:'',
                password:'',
                passwordError:''
            })
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="Login">
                <h1 className="Login-title">Welcome</h1>
                    <div className="Login-error">
                        {this.state.authError}
                    </div>
                <div className="Login-username">
                    <input
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <div className="Login-error">
                        {this.state.usernameError}
                    </div>
                </div>
                <div className="Login-password">
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div className="Login-error">
                        {this.state.passwordError}
                    </div>
                </div>
                <div className="Login-submit">
                    <input type='submit'/>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = {
    userAuth,
}

export default connect(null,mapDispatchToProps)(Login);