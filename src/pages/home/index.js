import React, { PureComponent, Fragment } from 'react';
import Carousel from './components/Carousel';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
    HomeWraper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends PureComponent {
    handleScrollTop() {
        // 瞬间滚动（默认）
        window.scrollTo(0, 0);
        //平滑滚动
        // window.scrollTo({
        //     left: 0,
        //     top: 0,
        //     behavior: 'smooth'
        // });
    }
    render(){
        return(
            <Fragment>
                <HomeWraper>
                    <HomeLeft>
                        <Carousel />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                    { this.props.scrollShow ?  <BackTop onClick={ this.handleScrollTop.bind(this) }>顶部</BackTop> : null }
                </HomeWraper>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getHomeAllInfo();
        this.bindEvents();
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow);
    }
    // 组件销毁时，将全局的事件绑定移除，这样就不会影响其他组件了。
    componentWillUnmont() {
        window.removeEventListener('scroll', this.props.changeScrollShow);
    }
}

const mapState = (state) => ({
    scrollShow: state.home.get('scrollShow')
})
const mapDispatch = (dispatch) => {
    return {
        getHomeAllInfo() {
            dispatch(actionCreators.getHomeInfo());
        },
        changeScrollShow() {
            if(document.documentElement.scrollTop > 200){
                dispatch(actionCreators.setScrollShow(true));
            }else{
                dispatch(actionCreators.setScrollShow(false));
            }
            
        }
    }
}
export default connect(mapState, mapDispatch)(Home);