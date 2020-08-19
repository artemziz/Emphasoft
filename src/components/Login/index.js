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
            password:password
        }
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.userAuth({
            username:this.state.username,
            password:this.state.password
        });
        this.setState({
            username:'',
            password:''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="Login">
                <h1 className="Login-title">Welcome</h1>
                <div className="Login-username">
                    <input
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="Login-password">
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
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