import { Link } from "react-router-dom";
import styled from "styled-components";

export const Divflex = styled.div`
    display: flex;
    gap: 10px;
`

export const container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 60px;
padding: 0 10px;
box-sizing: border-box;
background-color: white;
`
export const Icon = styled.img`
    width: 30px;
    cursor: pointer;
    &:hover{
        scale: 1.1;
        transition: 0.1s;
    }
`

export const StyledLink = styled(Link)`
    color: #000;
    font-size: 1.3rem;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginButton = styled.div`
    align-items: center;
`