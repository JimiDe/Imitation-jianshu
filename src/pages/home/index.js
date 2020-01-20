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
}

export default Home;