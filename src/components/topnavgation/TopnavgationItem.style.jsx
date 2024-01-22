import { Link } from "react-router-dom";
import styled from "styled-components";


export const Category = styled.div`
display: flex;
gap: 10px;
padding: 0 10px;
margin-top: 1rem;
box-sizing: border-box;
@media (max-width: 650px) {
    gap: 4px;
    padding: 0 5px;
}
`

export const Box = styled.div`
cursor: pointer;
    margin-top: 1rem;
    width: 100%;
    box-sizing: border-box;
    display: flex ;
    justify-content: space-between;
    padding: 0 16px;
    gap: 10px;
    @media (max-width: 650px) {
    gap: 4px;
    padding: 0 5px;
}
`

export const Seemore = styled.div`
    font-weight: bold;
`
export const Linkpage = styled(Link)`
    width: ${props => props.width};
`