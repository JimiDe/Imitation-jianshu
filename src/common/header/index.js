import React, { Component, Fragment } from 'react';
import { IconStyle } from '../../statics/iconfont/iconfont';
import { 
    HeaderWraper, 
    HeaderContent,
    Logo,
    Nav,
    NavItem,
    SearchWraper,
    NavSearch,
    BetaImg,
    Addtion,
    Button,
    } from './style';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    render() {
        return(
            <Fragment>
                <IconStyle />
                <HeaderWraper>
                    <HeaderContent>
                        <Logo />
                        <Nav>
                            <NavItem className='left active home'>
                                <span className="iconfont iconHome">&#xe786;</span>
                                首页
                            </NavItem>
                            <NavItem className='left download'>
                                <span className="iconfont iconDownload">&#xe608;</span>
                                下载App
                            </NavItem>
                            <SearchWraper className={ this.state.focused ? 'focused':''}>
                                <NavSearch className={ this.state.focused ? 'focused':''}
                                           onFocus={ this.handleInputFocus }
                                           onBlur={ this.handleInputBlur }
                                />
                                <span className={ this.state.focused ? 'iconfont focused':'iconfont'}>&#xe710;</span>
                            </SearchWraper>
                            <NavItem className='right login'>登录</NavItem>
                            <NavItem className='right beta'>
                                <BetaImg/>
                            </NavItem>
                            <NavItem className='right'>
                                <span className="iconfont">&#xe636;</span>
                            </NavItem>
                        </Nav>
                        <Addtion>
                            <Button className='reg'>注册</Button>
                            <Button className='write'>
                                <span className="iconfont">&#xe624;</span>
                                写文章
                            </Button>
                        </Addtion>
                    </HeaderContent>
                </HeaderWraper>
            </Fragment>
        )
    }

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
}    

export default Header;