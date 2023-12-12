import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width}px;
    padding:8px 10px;
    background-color: white;
    border-radius: 15px;
    justify-content: space-between;
    gap: 10px;
    box-sizing: border-box;
`
export const Icon = styled.img`
    width: 100%;

`

export const Title = styled.div`
    font-weight: 700;
`