import styled, { keyframes } from "styled-components";
import { color } from "../../../util/globalstyle";
const slideInAnimation = keyframes`
    from {
        width: 0;
    }
    to {
        width:100%
    }
`;

export const BackGround = styled.div`
    max-width: 640px;
    width: 100vw;
    background-color: ${color.modalBackground};
    height: 100%;
    position: fixed;
    z-index: 1;
    animation: ${slideInAnimation} 0.1s ease-in-out;
    padding: 5px 10px;
`;




export const Container = styled.div`
    max-width: 350px;
    width: 100%;
    background-color: #ffffff;
    height: 100%;
    position: fixed;
    z-index: 2;
    animation: ${slideInAnimation} 0.1s ease-in-out;
    padding: 5px 10px;
`;


export const InfoModalHeader = styled.div`
height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
align-items: center;
`

export const Closebutton = styled.img`
    width: 30px;
    cursor: pointer;
`

export const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ProfileImage = styled.img`
    width: 50px;`

export const NickName = styled.div`
    margin-left: 10px;
`


// 카테고리
export const Category = styled.div`
    font-weight:bold;
    margin-top: 10px;

`