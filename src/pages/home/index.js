import React, { Component, Fragment } from 'react';
import Carousel from './components/Carousel';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
    HomeWraper,
    HomeLeft,
    HomeRight
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
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
                </HomeWraper>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getHomeAllInfo();
    }
}

const mapDispatch = (dispatch) => {
    return {
        getHomeAllInfo() {
            dispatch(actionCreators.getHomeInfo());
        }
    }
}
export default connect(null, mapDispatch)(Home);