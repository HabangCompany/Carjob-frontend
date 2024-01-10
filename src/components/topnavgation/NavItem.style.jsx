import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width};
    padding:8px 10px;
    background-color: #fff;
    border-radius: 15px;
    justify-content: space-between;
    gap: 10px;
    box-sizing: border-box;
    box-shadow: 1px 1px 1px 1px gray;
    &:hover{
        scale: 1.01;
        transition: 0.2s;
        border: 1px solid gray;
        box-shadow: 2px 2px 2px 1px black;
    }
`
export const Icon = styled.img`
    width: 100%;
    @media (max-width: 650px) {
        width: 80%;
    }
`

export const Title = styled.div`
    font-weight: 700;
    @media (max-width: 650px) {
        font-size: ${props => props.fontsize};
    }
`