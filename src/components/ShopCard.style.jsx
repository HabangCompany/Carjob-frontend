import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;



`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
    @media screen and (max-width: 500px) {
        width: 150px;
        height: 150px;
    }
`

export const Shopname = styled.div`
text-align: left;
text-indent: 5%;
width: 100%;
    cursor: pointer;
`