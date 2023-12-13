import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width}px;
    padding:8px 10px;
    background-color: white;
    border-radius: 15px;
    justify-content: space-between;
    gap: 10px;
    box-sizing: border-box;
    &:hover{
        scale: 1.03;
        transition: 0.2s;
        border: 1px solid gray;
        box-shadow: 2px 2px 2px 1px black;
    }
`
export const Icon = styled.img`
    width: 100%;

`

export const Title = styled.div`
    font-weight: 700;
`