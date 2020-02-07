import React, { Fragment, PureComponent } from 'react';
import { IconStyle } from '../../statics/iconfont/iconfont';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreactors } from './store';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/login/store/index'
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



class Header extends PureComponent {

    getSearchArea() {
        // 结构赋值， 简化代码
        const { focused, list, page, totalPage, mouseEnter, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        // 在进行循环前进行判断，有数据才进行循环，否则在页面初始化（list无数据）时就会进行循环，会报list的key值问题。
        if(newList.length){
            // 避免报list的key值问题。比如热门搜索为25条时，26-29时会报错。
            if(page < totalPage){
                for(let i=(page-1)*10; i<page*10; i++){
                    pageList.push(
                        // immutable类型的数组，无法使用list[i],需要使用toJS()，将一个Immutable数据转换为JS类型的数据。
                        // <SearchInfoItem key={list[i]}>{ list[i] }</SearchInfoItem>
                        <SearchInfoItem key={newList[i]}>{ newList[i] }</SearchInfoItem>
                    ) 
                }
            }else{
                for(let i=(page-1)*10; i<newList.length; i++){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{ newList[i] }</SearchInfoItem>
                    ) 
                }
            }
            
        }
        
        if(focused || mouseEnter){
            return(
                <SearchInfo onMouseEnter ={ handleMouseEnter }
                            onMouseLeave={ handleMouseLeave }
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={ () => {handleChangePage(page, totalPage, this.spinIcon)} }>
                            <span className="iconfont spin"
                                  ref={(icon) => {this.spinIcon = icon}}
                                // 在 React 中，可以直接设置 style 属性来控制样式，不过与 HTML 不同的是， 传入的 style 值为一个对象， 对象的所有 key 都是驼峰式命名
                                  style={{transform: "rotate(0deg)"}} 
                            >&#xe7e9;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo> 
            )
        }else{
            return null;
        }
    }
    render(){
        // 结构赋值， 简化代码
        const { focused, list, handleInputFocus, handleInputBlur, login, logout } = this.props;
        return(
            <Fragment>
                <IconStyle />
                <HeaderWraper>
                    <HeaderContent>
                        <Link to='/'>
                            <Logo />
                        </Link>
                        
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
                                    in={ focused } 
                                    timeout={ 300 } 
                                    classNames="searchWraperSlide"
                                >
                                    <SearchWraper className={ focused ? 'focused':''}>
                                        <CSSTransition 
                                            in={ focused } 
                                            timeout={ 300 } 
                                            classNames="NavSearchSlide" 
                                        > 
                                            <NavSearch  
                                                className={ focused ? 'focused':''}
                                                onFocus={ () => {handleInputFocus(list)} } 
                                                onBlur={ handleInputBlur }
                                            />
                                        </CSSTransition>

                                        <CSSTransition 
                                            in={ focused } 
                                            timeout={ 100 } 
                                            classNames="iconfontSlide" 
                                        > 
                                            <span className={ focused ? 'iconfont focused':'iconfont'}>&#xe710;</span>
                                        </CSSTransition>
                                    </SearchWraper>
                                </CSSTransition> 
                                { this.getSearchArea() }
                            </SeachArea> 
                            { login ? <Link to='/'>
                                        <NavItem className='right login' onClick={ logout }>退出</NavItem>
                                      </Link> : <Link to='/login'>
                                                    <NavItem className='right login'>登录</NavItem>
                                                </Link>
                            }
                            
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
}

const mapStateToProps = (state) => {
    return{
        // focused: state.header.focused  // 使用了conbineReducers，没有使用immutable时的写法。
        // focused: state.header.get("focused")  //使用了conbineReducers和immutable，没有使用redux-immutable时的写法。

        // focused: state.get("header").get("focused")  //使用了combineReducers、immutable和redux-immutable时的写法。
        
        // focused: state.getIn(["header", "focused"]), // 和上行效果一致，只是换了个api。
        // list: state.getIn(["header", "list"]), 
        // mouseEnter: state.getIn(["header", "mouseEnter"]) ,
        // page: state.getIn(["header", "page"]) ,
        // totalPage: state.getIn(["header", "totalPage"]) ,

        focused: state.header.get("focused") ,
        list: state.header.get("list"), 
        mouseEnter: state.header.get("mouseEnter") ,
        page: state.header.get("page") ,
        totalPage: state.header.get("totalPage") ,
        login: state.login.get("login") 
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(list) {
            if(list.size === 0) {
                dispatch(actionCreactors.getSeachInfoList());
            }
            dispatch(actionCreactors.searchFocus());

        },
        handleInputBlur() {
            dispatch(actionCreactors.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreactors.searchAreaMouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreactors.searchAreaMouseLeave());
        },
        handleChangePage(page, totalPage, icon) {
            var iconDeg = icon.style.transform;  //获取行内样式
            var deg = iconDeg.match(/[0-9]+/g);  //匹配样式中的角度数值
            var degNum = parseInt(deg, 10);  //将字符串转为数字
            icon.style.transform = "rotate(" + (degNum+360) + "deg)"; //设置旋转角度
            if(page < totalPage){
                dispatch(actionCreactors.changePage(page+1));
            }else{
                dispatch(actionCreactors.changePage(1));
            }
        },
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);