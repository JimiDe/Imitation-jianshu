import React, { Component } from 'react';
import Carousel from './components/Carousel';
import Topic from './components/Topic';
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
            <div>
                <HomeWraper>
                    <HomeLeft>
                        <Carousel />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                </HomeWraper>
            </div>
        )
    }
}

export default Home;