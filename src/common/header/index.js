import React, { Fragment } from 'react';
import { IconStyle } from '../../statics/iconfont/iconfont';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
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


const Header = (props) => {
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
                        <CSSTransition 
                            in={ props.focused } 
                            timeout={ 300 } 
                            classNames="searchWraperSlide"
                        >
                            <SearchWraper className={ props.focused ? 'focused':''}>
                                <CSSTransition 
                                    in={ props.focused } 
                                    timeout={ 300 } 
                                    classNames="NavSearchSlide" 
                                > 
                                    <NavSearch  
                                        className={ props.focused ? 'focused':''}
                                        onFocus={ props.handleInputFocus } 
                                        onBlur={ props.handleInputBlur }
                                    />
                                </CSSTransition>
                                <CSSTransition 
                                    in={ props.focused } 
                                    timeout={ 100 } 
                                    classNames="iconfontSlide" 
                                > 
                                    <span className={ props.focused ? 'iconfont focused':'iconfont'}>&#xe710;</span>
                                </CSSTransition>
                            </SearchWraper>
                        </CSSTransition>   
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

const mapStateToProps = (state) => {
    return{
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus() {
            const action = {
                type: "search_focus"
            }
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: "search_blur"
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);