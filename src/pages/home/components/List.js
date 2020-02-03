import React, { Component } from 'react';
import { ArticleItem, ListInfo, More } from '../style';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'

class List extends Component {
    render(){
        const { articleList, getMoreArticle, articlePage } = this.props; 
        return(
            <div>
                {
                    articleList.map((item, index) => {
                        return(
                            <ArticleItem key={ index }>
                                <ListInfo>
                                    <div>
                                        <div className='title'>{ item.get('title') }</div>
                                        <div className='desc'>{ item.get('desc') }</div>
                                        <div className='status'>
                                            <div className='beta'>
                                                <span className='iconfont'>&#xe63d;</span>
                                                { item.get('beta') }
                                            </div>
                                            <a href='xxx'>
                                                { item.get('author') }
                                            </a>
                                            <a href='xxx'>
                                                <span className='iconfont'>&#xe684;</span>
                                                { item.get('comment') }
                                            </a>
                                            <div>
                                                <span className='iconfont'>&#xe755;</span>
                                                { item.get('like') }
                                            </div>
                                        </div>
                                    </div>
                                </ListInfo>
                            </ArticleItem>
                        )  
                        
                    })
                }
                <More onClick={ () => { getMoreArticle(articlePage) }}>
                    阅读更多
                </More>
            </div>
            
        )
    }
}

const mapState = (state) => ({
    articleList: state.home.get('articleList'),
    articlePage: state.home.get('articlePage'),
});
const mapDispatch = (dispatch) => {
    return {
        getMoreArticle(page) {
           dispatch(actionCreators.getMore(page+1)); 
        }
    }
};
export default connect(mapState, mapDispatch)(List);