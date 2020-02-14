import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWraper, LoginBox, Input, LoginButton } from './style';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';

class Login extends PureComponent {
    render(){
        if(!this.props.loginStatus){
            return(
                <LoginWraper>
                    <LoginBox>
                        <Input placeholder="手机号或邮箱" ref={ (input) => { this.account = input } }/>
                        <Input type='password' placeholder='密码' ref={ (input) => { this.password = input } }/>
                        <LoginButton onClick={ () => this.props.login(this.account, this.password) }>登陆</LoginButton>
                    </LoginBox>
                </LoginWraper>
            )
        }else{
            return(
                <Redirect to='/'/>
            )
        }
        
    }
}

const mapState = (state) => ({
    loginStatus: state.login.get('login')
})
const mapDispatch = (dispatch) => {
    return {
        login(account, password) {
            dispatch(actionCreators.login(account.value, password.value));
        }
    }
}
export default connect(mapState, mapDispatch)(Login);