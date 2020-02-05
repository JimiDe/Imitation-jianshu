import React, { PureComponent } from 'react';
import { RecommendWraper } from '../style'; 
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render(){
        const { recommendList } = this.props;
        return(
            <RecommendWraper>
                {
                    recommendList.map((item) => {
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
    recommendList: state.home.get('recommendList')
})
export default connect(mapState, null)(Recommend);