import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import betaPic from '../../statics/beta.png';

export const HeaderWraper = styled.div`
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const HeaderContent = styled.div`
    margin: 0 40px;
    position: relative;
`;

export const Logo = styled.a.attrs({href: '/'})`
    display: block;
    width: 100px;
    height: 56px;
    position: absolute;
    left: 0;
    //引入图片
    background: url(${logoPic});
    //保持图像的宽高比例进行缩放，保证背景图片被完整显示。
    background-size: contain;
`;

export const Nav = styled.div`
    width: 975px;
    height: 58px;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    height: 56px;
    padding: 15px;
    //采用IE盒子模型
    box-sizing: border-box;
    line-height: 26px; //height-padding*2
    font-size: 17px;
    color: #333;
    text-align: right;
    position: relative;
    margin-left: 5px;
    //类名样式设置  
    &.left {
        float: left;
    };
    &.right {
        float: right;
        color: #969696;
    };
    &.active {
        color: #ea6f5a;
    };
    &.home {
        width: 89px;
    }
    &.download {
        width: 119.25px;
    }
    &.beta {
        width: 56px;
        margin-right: 12px;
        padding: 15px 0;
    }
    .iconHome, .iconDownload{
        font-size: 20px;
        margin-right: 5px;
        position: absolute;
        top: 16px;
        left: 15px;
    }
    cursor: pointer;
`;

export const SeachArea = styled.div`
    width: 255px;
    height: 56px;
    float: left;
    margin-right: 10px;
    box-sizing: border-box;
    position: relative;
`;

export const SearchWraper = styled.div`
    width: 255px;
    height: 56px;
    padding-left: 15px;
    margin-right: 10px;
    box-sizing: border-box;
    position: relative;

    .iconfont{
        width: 30px;
        height: 30px;
        position: absolute;
        right: 3px;
        top: 13px;
        text-align: center;
        line-height: 30px;
        //选中搜索框后，iconfont样式设置
        &.focused {
            border-radius: 115px;
            background: #969696;
            right: -10px;
            color: #fff;
        };
        //iconfont入场动画
        &.iconfontSlide-enter {
            transition: all 0.1s ease-in;
        }
        &.iconfontSlide-enter-active {
            color: #fff;
            border-radius: 115px;
            background: #969696;
            right: -10px;
        }
        //iconfont出场动画
        &.iconfontSlide-exit {
            transition: all 0.1s ease-in;
        }
        &.iconfontSlide-exit-active {
            border: none;
            right: 3px;
        }
    };
    //选中搜索框后，SearchWraper样式设置
    &.focused {
        width: 320px;
    };

    //searchWraper入场动画
    &.searchWraperSlide-enter {
        width: 255px;
        transition: all 0.3s ease-out;
    }
    &.searchWraperSlide-enter-active {
        width: 320px;
    }
    //searchWraper出场动画
    &.searchWraperSlide-exit {
        transition: all 0.3s ease-out;
    }
    &.searchWraperSlide-exit-active {
        width: 255px;
    }
    
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 15px;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0 , 0 , 0.2);
    // &.unfocused {
    //     display: none;
    // }
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    font-size: 13px;
    float: right;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: inline-block;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    margin: 0 10px 15px 0;
    padding: 0 5px;
    line-height: 1.8;
    border-radius: 3px;
`;

export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
    width: 240px;
    height: 38px;
    padding: 0 40px 0 20px;
    box-sizing: border-box;
    // 去除边框水印
    border: none;
    //去除点击时的边框
    outline: none;
    border-radius: 19px;
    position: absolute;
    top: 9px;
    background: #eee;
    font-size: 14px;
    //属性样式设置
    &::placeholder {
        color: #969696;
    };
    //选中搜索框后，NavSearch样式设置
    &.focused {
        width: 320px;
        color: #777;
    };
    //NavSearch入场动画
    &.NavSearchSlide-enter {
        width: 240px;
        transition: all 0.3s ease-out;
    }
    &.NavSearchSlide-enter-active {
        width: 320px;
    }
    //NavSearch出场动画
    &.NavSearchSlide-exit {
        transition: all 0.3s ease-out;
    }
    &.NavSearchSlide-exit-active {
        width: 240px;
    }

`;

export const BetaImg = styled.div`
    width: 57px;
    height: 55px;
    padding: 15px 0px;
    margin-right: 12px;
    box-sizing: border-box;
    background: url(${betaPic}) no-repeat;
    background-size: contain;
`;

export const Addtion = styled.div`
    width: 240px;
    height: 56px;
    position: absolute;
    right: 0;
    top: 0;
`;

export const Button = styled.div`
    box-sizing: border-box;
    font-size: 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 40px;
    text-align: center;
    line-height: 38px;
    &.reg {
        width: 80px;
        height: 38px;
        color: #ea6f5a;
        margin: 9px 5px 0 15px;
        float: left;
    };
    &.write {
        width: 100px;
        height: 40px;
        color: #F8E6FF;
        margin: 8px 12px 0;
        float: left;
        background: #ea6f5a;
        .iconfont {
            margin-right: 5px;
        }
    }
    cursor: pointer;
`;



