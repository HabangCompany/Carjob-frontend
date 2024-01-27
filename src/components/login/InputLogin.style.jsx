import styled from "styled-components";
import { color } from "../../util/globalstyle"

export const Container = styled.div`
    margin: auto;
    margin-top: 1rem;
    max-width: 450px;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: left;
`

export const InputDiv = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;
`

export const Label = styled.label`
    width: 130px ;
`

export const Input = styled.input`
    width: 100%;
    height: 35px;
`


export const Button = styled.button`
margin-top: 1rem;
    width: 100%;
    background-color: ${color.button1};
    color:  ${color.button1Text};

`

export const SignupButton = styled.button`
    margin-top: 1rem;
    width: 100%;
    background-color: ${color.button2};
    color: ${color.button2Text};

`