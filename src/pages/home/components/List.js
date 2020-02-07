import React, { PureComponent } from 'react';
import { Article, ArticleItem, ListInfo, More } from '../style';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render(){
        const { articleList, getMoreArticle, articlePage } = this.props; 
        return(
            <Article>
                {
                    articleList.map((item, index) => {
                        return(
                            <ArticleItem key={ index }>
                                <ListInfo>
                                    {/* <Link to='/detail' style={{textDecoration: 'none'}}> */}
                                    <Link to={'/detail/' + item.get('id')} style={{textDecoration: 'none'}}>
                                        <div className='title'>{ item.get('title') }</div>
                                    </Link> 
                                    <div className='desc'>{ item.get('desc') }</div>
                                    <div className='status'>
                                        <div className='beta'>
                                            <span className='iconfont'>&#xe63d;</span>
                                            { item.get('beta') }
                                        </div>
                                        <div>
                                            { item.get('author') }
                                        </div>
                                        <div>
                                            <span className='iconfont'>&#xe684;</span>
                                            { item.get('comment') }
                                        </div>
                                        <div>
                                            <span className='iconfont'>&#xe755;</span>
                                            { item.get('like') }
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
            </Article>
            
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