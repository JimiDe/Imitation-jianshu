import styled from 'styled-components';

export const LoginWraper = styled.div`
    z-index: 2000;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #f1f1f1;
`;
export const LoginBox = styled.div`
    width: 400px;
    height: 200px;
    margin: 150px auto;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    background-color: #fff;
    padding: 10px;
    outline: none;
    box-sizing: border-box;
`;
export const Input = styled.input`
    width: 300px;
    height: 40px;
    line-height: 50px;
    border: 1px solid #c8c8c8;
    border-radius: 6px;
    display: block;
    margin: 8px auto;
    padding-left: 15px;
    outline: none; // 去除input输入框点击时的外边框
    background-color: #f1f1f1;
    color: #A0A0A0;
    font-size: 14px;
    box-sizing: border-box;
`;

export const LoginButton = styled.div`
    width: 300px;
    background: #3194d0;
    padding: 15px;
    font-size: 18px;
    border: 1px solid #c8c8c8;
    color: #fff;
    border-radius: 25px;
    cursor: pointer;
    margin: 30px auto 0;
    box-sizing: border-box;
    text-align: center;
`;