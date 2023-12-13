import { Link } from "react-router-dom";
import styled from "styled-components";


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
`

export const StyledLink = styled(Link)`
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
`