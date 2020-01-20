import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../store/actionCreators';

class Carousel extends Component {
    render(){
        const { image, offset, picIndex, isPlaying, getprevPic, getNextPic, handleBtnClick, handleMouseEnter, handleMouseLeave } = this.props;
        return(
            <div className='carousel'
                 onMouseEnter = { () => { handleMouseEnter() } }
                 onMouseLeave = { () => { handleMouseLeave(offset, image, picIndex, isPlaying, getNextPic) } }
                 onChange = { () => { getNextPic(offset, image, picIndex) } }
            >
                <div className='imgContent' ref='imgContent' style={{ width: 625*(image.size+2), left:offset+'px' }}>
                    <img key={image.last().get('id')} src={image.last().get('pic')} alt={image.last().get('title')}/> 
                    {
                        image.map((item) => {
                            return (
                                <img key={item.get('id')} src={item.get('pic')} alt={item.get('title')}/> 
                            )
                        })
                    } 
                    <img key={image.first().get('id')} src={image.first().get('pic')} alt={image.first().get('title')}/> 
                </div>
                <div className='arrowsWraper wraperLeft' onClick={ () => {getprevPic(offset, image, picIndex, isPlaying)} }>
                    <span className="iconfont">&#xe611;</span>
                </div>
                <div className='arrowsWraper wraperRight' onClick={ () => {getNextPic(offset, image, picIndex, isPlaying)} }>
                    <span className="iconfont">&#xe612;</span>
                </div>
                <ol className='bottom_btn'>
                    {
                        image.map((item,index) => {
                            return (
                                <li key={index} className={ picIndex === index ? 'wheel whellOn':'wheel'} onClick={ () =>{ handleBtnClick(picIndex, index, offset, image) }}></li>
                            )
                        })
                    } 
                </ol>
            </div>
        )
    }
    componentDidMount() { 
        const { image, offset, picIndex, isPlaying, getNextPic, handleMouseLeave } = this.props;
        handleMouseLeave(offset, image, picIndex, isPlaying, getNextPic);
    }
}

const mapStateToProps = (state) => ({
    image: state.home.get('image'),
    offset: state.home.get('offset'),
    picIndex: state.home.get('picIndex'),
    isPlaying: state.home.get('isPlaying'),
})
var timer;  // 自动播放定时器
const mapDispatchToProps = (dispatch) => {
    return {
        // 缓慢轮播上一张图片，底部按钮点亮随之变动。
        // 频繁点击无效。
        getprevPic(offset, image, picIndex, isPlaying) {
            if(isPlaying){
                isPlaying = false;
                dispatch(actionCreators.playingChange(isPlaying));

                if(offset < 0){
                    picIndex -=1;
                    //缓慢滚动
                    var time = 300;  //动画总时长
                    var wait = 60;  //等待时长
                    var everyOffset = 625/(time/wait);
                    function animate(leftVal) {
                        var newOffset = leftVal + everyOffset;
                        if(newOffset <= offset + 625){
                            setTimeout(function(){
                                dispatch(actionCreators.getNext(newOffset, picIndex));
                                if(newOffset === 0){
                                    setTimeout(function(){
                                        dispatch(actionCreators.getNext(-625*(image.size), image.size-1));
                                    },200);
                                }
                                animate(newOffset);
                            }, wait);
                        }else{
                            return;
                        }
                    }
                    animate(offset);
                }
                setTimeout(function(){
                    isPlaying = true;
                    dispatch(actionCreators.playingChange(isPlaying));
                },1000);
                
            }
            
        },
        // 缓慢轮播下一张图片，底部按钮点亮随之变动。
         // 频繁点击无效。
        getNextPic(offset, image, picIndex, isPlaying) {
            if(isPlaying){
                isPlaying = false;
                dispatch(actionCreators.playingChange(isPlaying));
                if(offset > -625*(image.size+1)){
                    picIndex +=1;
                    //缓慢滚动
                    var time = 300;  //动画总时长
                    var wait = 60;  //等待时长
                    var everyOffset = -625/(time/wait);
                    function animate(leftVal) {
                        var newOffset = leftVal + everyOffset;
                        if(newOffset >= offset - 625){
                            setTimeout(function(){
                                dispatch(actionCreators.getNext(newOffset, picIndex));
                                if(newOffset === -625*(image.size+1)){
                                    setTimeout(function(){
                                        dispatch(actionCreators.getNext(-625, 0));
                                    },200);
                                }
                                animate(newOffset);
                                
                            }, wait);
                        }else{
                            return;
                        }
                    }
                    animate(offset);
                }
            }
            setTimeout(function(){
                isPlaying = true;
                dispatch(actionCreators.playingChange(isPlaying));
            },1000);
        },
       
        // 点击底部按钮选择图片时，轮播图缓慢移动且按钮点亮随之变动。
        handleBtnClick(picIndex, index, offset, image){
            // 优化：点击当前按钮，不执行。
            if(index !== picIndex){
                // index: 点击时的index
                // picIndex：目前显示图片的index
                // index: 0,1,2
                // picIndex: 2,0,1,2,0
                //缓慢滚动,相邻滚动慢一点。
                var time = 300;  //动画总时长
                var wait = 60;  //等待时长
                if(Math.abs(index - picIndex) !== 1 ){ //Math.abs()，取绝对值。
                    time = 50;  
                    wait = 10; 
                }
                var everyOffset = 1; 
                var allOffset =  1;
                // 点击被点亮按钮的右侧
                if(index > picIndex ){
                    allOffset = offset - (index-picIndex)*625;
                    everyOffset = -625/(time/wait);
                    function animate(leftVal) {
                        var newOffset = leftVal + everyOffset;
                        if(newOffset >= allOffset){
                            setTimeout(function(){
                                dispatch(actionCreators.getNext(newOffset, index));
                                if(newOffset === -625*(image.size+1)){
                                    setTimeout(function(){
                                        dispatch(actionCreators.getNext(-625, 0));
                                    },200);
                                }
                                animate(newOffset);
                            }, wait);
                        }else{
                            return;
                        }
                    }
                    animate(offset);
                }else{
                    // 点击被点亮按钮的左侧
                    allOffset = offset + (picIndex-index)*625;
                    everyOffset = 625/(time/wait);
                    function animate(leftVal) {
                        var newOffset = leftVal + everyOffset;
                        if(newOffset <= allOffset){
                            setTimeout(function(){
                                dispatch(actionCreators.getNext(newOffset, index));
                                if(newOffset === 0){
                                    setTimeout(function(){
                                        dispatch(actionCreators.getNext(-625*(image.size), 0));
                                    },200);
                                }
                                animate(newOffset);
                            }, wait);
                        }else{
                            return;
                        }
                    }
                    animate(offset);
                }
            }
            
        },
        //鼠标移入轮播图区域，自动播放停止。
        handleMouseEnter() {
            clearInterval(timer);
        },
        //鼠标移出轮播图区域，自动播放开始。
        handleMouseLeave(offset, image, picIndex, isPlaying, getNextPic){
            timer = setInterval(function(){
                getNextPic(offset, image, picIndex, isPlaying);
                offset -= 625;
                if(offset === -625*(image.size+1)){
                    offset = -625;
                } 
                if(picIndex + 1 === 3){
                    picIndex = 0
                }else{
                    picIndex +=1;
                }
            }, 4000);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);