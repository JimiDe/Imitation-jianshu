import React, { Fragment } from 'react';
import { IconStyle } from '../../statics/iconfont/iconfont';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreactors } from './store';
import { 
    HeaderWraper, 
    HeaderContent,
    Logo,
    Nav,
    NavItem,
    SeachArea,
    SearchWraper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
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
                        <SeachArea>
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
                            <SearchInfo className={props.focused ? '' : 'unfocused'}>
                                <SearchInfoTitle>
                                    热门搜索
                                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                                </SearchInfoTitle>
                                <SearchInfoList>
                                    {
                                        props.list.map((item) => {
                                            return(
                                                <SearchInfoItem key={item}>{ item }</SearchInfoItem>
                                            )
                                        })
                                    }
                                </SearchInfoList>
                            </SearchInfo> 
                        </SeachArea> 
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
        // focused: state.header.focused  // 使用了conbineReducers，没有使用immutable时的写法。
        // focused: state.header.get("focused")  //使用了conbineReducers和immutable，没有使用redux-immutable时的写法。

        // focused: state.get("header").get("focused")  //使用了combineReducers、immutable和redux-immutable时的写法。
        focused: state.getIn(["header", "focused"]), // 和上行效果一致，只是换了个api。
        list: state.getIn(["header", "list"]) 

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus() {
            dispatch(actionCreactors.searchFocus());
            dispatch(actionCreactors.getSeachInfoList());
        },
        handleInputBlur() {
            dispatch(actionCreactors.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);