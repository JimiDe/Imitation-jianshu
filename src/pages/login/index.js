import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWraper, LoginBox, Input, LoginButton } from './style';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';

class Login extends PureComponent {
    render(){
        return(
            <LoginWraper>
                <LoginBox>
                    <Input placeholder="手机号或邮箱" ref={ (input) => this.account = input }/>
                    <Input type='password' placeholder='密码' ref={ (input) => this.password = input }/>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <LoginButton onClick={ () => this.props.login(this.account, this.password) }>登陆</LoginButton>
                    </Link>
                </LoginBox>
            </LoginWraper>
        )
    }
}

const mapState = (state) => ({
})
const mapDispatch = (dispatch) => {
    return {
        login(account, password) {
            dispatch(actionCreators.login(account.value, password.value));
        }
    }
}
export default connect(mapState, mapDispatch)(Login);