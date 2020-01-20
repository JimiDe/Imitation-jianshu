import React, { Component } from 'react';
import { ArticleItem, ListInfo, More } from '../style';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'

class List extends Component {
    render(){
        const { articleListData, haveMore, everyMoreShow, moreCount, getMoreArticle } = this.props; 
        return(
            <div>
                {
                    articleListData.map((item, index) => {
                        if(index < everyMoreShow*moreCount){
                            return(
                                <ArticleItem key={ item.get('id') }>
                                    <img src={ item.get('imgUrl') } alt='' className={ item.get('imgUrl')? 'img':'noImg' }/>
                                    <ListInfo>
                                        <div className={ item.get('imgUrl')? 'ListInfoHasImg':'ListInfoNoImg' }>
                                            <div className='title'>{ item.get('title') }</div>
                                            <div className='desc'>{ item.get('desc') }</div>
                                            <div className='status'>
                                                <div>
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
                        }else{
                            return null
                        }
                        
                    })
                }
                <More onClick={ () => {getMoreArticle(moreCount, everyMoreShow, articleListData, haveMore)} }>
                    <div className={haveMore? 'have':'noHave'}>{haveMore? '阅读更多':'已无更多'}</div>
                </More>
            </div>
            
        )
    }
}

const mapState = (state) => ({
    articleListData: state.home.get('articleListData'),
    haveMore: state.home.get('haveMore'),
    everyMoreShow: state.home.get('everyMoreShow'),
    moreCount: state.home.get('moreCount'),
});
const mapDispatch = (dispatch) => {
    return {
        getMoreArticle(count, everyShow, allData, haveMore) {
            if(haveMore){
                if(everyShow*count <= allData.size){
                count++;
                    if(allData.size <= everyShow*(count+1)){
                        dispatch(actionCreators.getMore(count,false));
                    }else{
                        dispatch(actionCreators.getMore(count,true));
                    }
                    
                }else{
                    dispatch(actionCreators.getMore(1, false));
                }
            }
            

            
        }
    }
};
export default connect(mapState, mapDispatch)(List);