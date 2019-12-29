import React, { Fragment, Component } from 'react';
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



class Header extends Component {

    getSearchArea() {
        // 结构赋值， 简化代码
        const { focused, list, page, totalPage, mouseEnter, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        // 在进行循环前进行判断，有数据才进行循环，否则在页面初始化（list无数据）时就会进行循环，会报list的key值问题。
        if(newList.length){
            for(let i=(page-1)*10; i<page*10 ; i++){
                pageList.push(
                    // immutable类型的数组，无法使用list[i],需要使用toJS()，将一个Immutable数据转换为JS类型的数据。
                    // <SearchInfoItem key={list[i]}>{ list[i] }</SearchInfoItem>
                    <SearchInfoItem key={newList[i]}>{ newList[i] }</SearchInfoItem>
                ) 
            }
        }
        
        if(focused || mouseEnter){
            return(
                <SearchInfo onMouseEnter ={ handleMouseEnter }
                            onMouseLeave={ handleMouseLeave }
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={ () => {handleChangePage(page, totalPage)} }>换一批</SearchInfoSwitch>
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
        const { focused, handleInputFocus, handleInputBlur } = this.props;
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
                                                onFocus={ handleInputFocus } 
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
}

const mapStateToProps = (state) => {
    return{
        // focused: state.header.focused  // 使用了conbineReducers，没有使用immutable时的写法。
        // focused: state.header.get("focused")  //使用了conbineReducers和immutable，没有使用redux-immutable时的写法。

        // focused: state.get("header").get("focused")  //使用了combineReducers、immutable和redux-immutable时的写法。
        focused: state.getIn(["header", "focused"]), // 和上行效果一致，只是换了个api。
        list: state.getIn(["header", "list"]), 
        mouseEnter: state.getIn(["header", "mouseEnter"]) ,
        page: state.getIn(["header", "page"]) ,
        totalPage: state.getIn(["header", "totalPage"]) 
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
        },
        handleMouseEnter() {
            dispatch(actionCreactors.searchAreaMouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreactors.searchAreaMouseLeave());
        },
        handleChangePage(page, totalPage) {
            if(page < totalPage){
                dispatch(actionCreactors.changePage(page+1));
            }else{
                dispatch(actionCreactors.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);