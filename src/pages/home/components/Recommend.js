import React, { Component } from 'react';
import { RecommendWraper } from '../style'; 
import { connect } from 'react-redux';

class Recommend extends Component {
    render(){
        const { recommend } = this.props;
        return(
            <RecommendWraper>
                {
                    recommend.map((item) => {
                        return(
                            <a href='/' key={ item.get('id') }>
                                <img src={ item.get('imgUrl') } alt=''/>
                            </a>
                        )
                    })
                }
                
            </RecommendWraper>
        )
    }
}

const mapState = (state) => ({
    recommend: state.home.get('recommend')
})
export default connect(mapState, null)(Recommend);