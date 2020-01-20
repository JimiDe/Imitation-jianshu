import React, { Component } from 'react';
import { WriterWraper, WriterTitle, WriterSwitch, WriterInfo,  MoreWriter, WriterItem, ProfilePhoto, WriterDesc, Attention, WriterData } from '../style';
import { connect } from 'react-redux'; 
import * as actionCreators from '../store/actionCreators';

class Writer extends Component {
    getWriterInfo() {
        const { writerList, writerPage } = this.props; 
        const newData = writerList.toJS();
        const AllPage = Math.ceil(writerList.size/5);
        const pageList = [];
        if(writerList.size){
            if(writerPage < AllPage){
                getEveryPageInfo(writerPage*5);
                return(
                    <WriterInfo>
                        { pageList }
                    </WriterInfo>
                )
            }else{
                getEveryPageInfo(writerList.size);
                return(
                    <WriterInfo>
                        { pageList }
                    </WriterInfo>
                )
            }
        }
        
        function getEveryPageInfo(stopIndex){
            for(let i=(writerPage-1)*5; i<stopIndex; i++){
                pageList.push(
                    <WriterItem key={ newData[i].id }>
                        <ProfilePhoto>
                            <a href='/'>
                                <img src={ newData[i].photo } alt=''></img>
                            </a>
                        </ProfilePhoto>
                        <WriterDesc>
                            <Attention>
                                <a href='/'>{ newData[i].author }</a>
                                <div className='attention'>
                                    <span className="iconfont">&#xe711;</span>
                                    关注
                                </div>
                            </Attention>
                            <WriterData>
                                写了{ newData[i].wordCount }字  { newData[i].likeCount }喜欢
                            </WriterData>
                        </WriterDesc>
                    </WriterItem>
                )
            };
        }
    }
    render(){
        const { writerList, writerPage, handleWriterChange } = this.props; 
        return(
            <WriterWraper>
                <WriterTitle>
                    推荐作者
                    <WriterSwitch onClick={ () => { handleWriterChange(writerList, writerPage, this.spinIcon) }}>
                        <span className='iconfont'
                              ref={ (icon) => { this.spinIcon = icon } }
                              style={{ transform: "rotate(0deg)" }}
                        >&#xe7e9;</span>
                        换一批
                    </WriterSwitch>
                </WriterTitle>
                { this.getWriterInfo() }
                <MoreWriter>
                    查看更多
                    <span className="iconfont">&#xe612;</span>
                </MoreWriter>
            </WriterWraper>
        )
    }
}

const mapState = (state) => ({
    writerList: state.home.get('writerList'),
    writerPage: state.home.get('writerPage')
})
const mapDispatch = (dispatch) => {
    return {
        handleWriterChange(allData, page, icon) {
            var iconDeg = icon.style.transform;
            var degStr = iconDeg.match(/[0-9]+/g);
            var degNum= parseInt(degStr[0], 10);
            icon.style.transform = 'rotate(' + (degNum+360) + 'deg)';
            if(page < Math.ceil(allData.size/5)){
                dispatch(actionCreators.changeWriterPage(page+1));
            }else{
                dispatch(actionCreators.changeWriterPage(1));
            }
        }
    }
}
export default connect(mapState, mapDispatch)(Writer);