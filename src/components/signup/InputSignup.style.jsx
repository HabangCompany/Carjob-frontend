import styled from "styled-components";
import { color } from "../../util/globalstyle";
export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    
`

export const Container = styled.div`
    margin: auto;
    margin-top: 1rem;
    max-width: 450px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 1rem;
    box-sizing: border-box;
`

export const InputDiv = styled.div`
    width: 100%;
    margin-top: 1rem;
    align-items: center;
    box-sizing: border-box;
    
`

export const InputBox = styled.div`
    width: 100%;
    margin-top: 5px;

`

export const Label = styled.label`
    width: 130px;
    font-weight: bold;
`

export const Input = styled.input`
box-sizing: border-box;
    width: 100%;
    height: 35px;
    background-color: white;
    border-radius: 10px;
    text-indent: 10px;
    color:black;

`

export const CheckButton = styled.button`
color: ${color.buttonText};
    max-width: 120px;
    width: auto;
    white-space: nowrap; 
    margin-left: 5px;
    background-color: ${color.button1};

`

export const SignupButton = styled.button`
color: ${color.buttonText};
margin-top: 1rem;
    width: 100%;
    background-color: ${color.button1};

`

export const Wrongtext = styled.div`
font-size: 0.8rem;
font-weight: bold;
color: #ff5252;
text-align: center;
width: 100%;
`
export const Important = styled.span`
    color:red
`