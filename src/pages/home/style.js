import styled from 'styled-components';

export const HomeWraper = styled.div`
    width: 960px;
    height: 300px;
    margin: 0 auto;
    // overflow: auto;   //触发bfc
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;

    .carousel {
        width: 625px;
        height: 270px;
        overflow: hidden;  //展示最左边的一张图片
        position: relative;
        

        .imgContent {
            position: absolute;
            height: 270px;
            // transition: all 3s;
            img {
                width: 625px;
                height: 270px;
                float: left;
            }
        }
        .arrowsWraper {
            display: inline-block;
            width: 40px;
            height: 50px;
            line-height: 50px;   // iconfont垂直居中
            cursor: pointer;
            position: absolute;
            top: 50%;
            margin-top: -25px;
            text-align: center;  // iconfont水平居中
            
            .iconfont {
                display: none;
            }
        }
        .wraperLeft {
            left: 0;
        }
        .wraperRight {
            right: 0;
        }
        .bottom_btn {
            width: 388px;
            height: 24px;
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-194px);
            text-align: center;

            .wheel {
                display: inline-block;
                width: 25px;
                height: 2px;
                margin: 2px;
                background-color: #C8C3BD;
                border-radius: 1px;
                cursor: pointer;
            }
            .whellOn{
                background: #EA6F5A;
            }
        }
    }
    .carousel:hover {
        .arrowsWraper {
            background-color: #000;
            opacity: 0.4;
        }
        .arrowsWraper:hover {
            opacity: 0.7;
        } 
        .iconfont {
            display: inline-block;
            font-size: 27px;
            color: white;
            text-shadow: 0 1px 2px rgba(0,0,0,.6);
            
        }
    }
           
    
`;

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`;