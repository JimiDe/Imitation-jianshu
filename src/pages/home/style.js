import styled from 'styled-components';

export const HomeWraper = styled.div`
    width: 960px;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-480px);
    z-index: 100;
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
        cursor: pointer;

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

export const ArticleItem = styled.div`
    box-sizing: border-box;
    padding: 20px 0;
    margin-top: 20px;
    border-bottom: 1px solid #d1d1d1;
    min-height: 140px;
    overflow: hidden;
    .img {
        width: 125px;
        height: 100px;
        float: right;
        cursor: pointer;
    }
    .noImg {
        display: none;
    }
`;
export const ListInfo = styled.div`
    float: left;
    .ListInfoHasImg {
        width: 500px; 
    }
    .ListInfoNoImg {
        width: 625px; 
    }
    .title {
        font-size: 18px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
        lin-height: 27px
        margin: 7px 0 4px;
    }
    .desc {
        font-size: 13px;
        color: #999;
        line-height: 18px;
        margin-top: 10px;
    }
    .status {
        margin-top: 15px;
        font-weight: 400;
        line-height: 20px;
        font-size: 12px;
        
        div {
            color: #b4b4b4;
            margin-right: 15px;
            display: inline-block;
            
        }
        a {
            text-decoration: none;
            color: #b4b4b4;
            margin-right: 15px;
        }
        .iconfont {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-right: 1px;
        }
    }
`;
export const More = styled.div`
    div {
        width: 625px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        margin: 30px auto 60px;
        text-align: center;
        font-size: 15px;
        color: #fff;
    }
    .have{
        background-color: #EA6F5A;
        cursor: pointer;
    }
    .noHave {
        background-color: #a5a5a5;
        cursor: default;
    }
    
`;

export const HomeRight = styled.div`
    box-sizing: border-box;
    width: 280px;
    float: right;
`;

export const RecommendWraper = styled.div`
    margin-top: 25px;
    a {
        display: inline-block;
        margin-bottom: 5px;
    }
    img {
        width: 280px;
        height: 50px;
    }
`;

export const WriterWraper = styled.div`
    margin-top: 30px;
`;  
export const WriterTitle = styled.div`
    width: 280px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #969696;
    overflow: hidden;  //BFC
`;  

export const WriterSwitch = styled.div`
    color: #969696;
    float: right;
    cursor: pointer;
    .iconfont {
        font-size: 13px;
        margin-right: 2px;
        display: inline-block; // 旋转动画必须的
        transition: all 0.2s; // 旋转动画必须的
        // transform-origin: center center;
    }
`;
export const WriterInfo = styled.div`
    font-size: 13px; 
`; 

export const WriterItem = styled.div`
    width: 280px;
    height: 47px;
    margin-top: 15px;
`;
export const ProfilePhoto = styled.div`
    float: left;
    a {
        display: inline-block;
    }
    img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        object-fit: contain;
    }
`;
export const WriterDesc = styled.div`
    float: left;
`;
export const Attention = styled.div`
    display: inline-block;
    width: 220px;
    font-size: 14px;
    margin: 10px 5px 5px 5px;
    a {
        text-decoration: none;
        color: #000;
    }
    .attention {
        float: right;
        color: #42c02e;
        font-size: 13px;
        cursor: pointer;
        .iconfont {
            font-size: 12px;
            margin-right: 2px;
        }
    }
`;
export const WriterData = styled.div`
    width: 220px;
    font-size: 12px;
    color: #969696;
    margin: 0 5px;
`;


export const MoreWriter = styled.div`
    width: 280px;
    height: 35px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    margin-top: 12px;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
    .iconfont {
        font-size: 10px;
    }
`;

