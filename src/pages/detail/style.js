import styled from 'styled-components';

export const DetailWraper = styled.div`
    position: absolute;
    top: 90px;
    width: 730px;
    left: 50%;
    margin-left: -480px;
`;

export const Header = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Content = styled.div`
    font-size: 16px;
    line-height: 1.8;
    h2 {
        font-weight: bold;
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 20px;
    }
    img {
        max-width: 100%;
    }
`