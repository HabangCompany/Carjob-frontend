import styled from "styled-components";
import { color } from '@/util/globalstyle.js'


export const Container = styled.div`
    width: 100%;
    height: 150px;

    display: flex;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px gray;
    &:hover{
        scale: 1.01;
        transition: 0.2s;
        box-shadow: 2px 2px 2px 1px black;
    }
    @media screen and (max-width:500px) {
        height: 100px;
    }
`
export const ImageBox = styled.div`
    border-radius: 10px;
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    img{
        border-radius: 10px 0 0 10px;
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width:500px) {
        width:100px;
        height: 100px;
    }
`

export const DescriptionArea = styled.div`
width: calc(100% - 150px);
display: flex;
flex-direction: column;
text-align: left;
`
export const Title = styled.h3`
margin: 0;
    margin-left: 5px;
`

export const Article = styled.div`
    margin-left: 5px;
`



// 시공태그

export const Tag = styled.button`
margin-left: 5px;
box-sizing: border-box;
border-radius: 999px;
    padding: 2px 4px;
    background-color: ${color.main};
    border: 1px solid black;
`