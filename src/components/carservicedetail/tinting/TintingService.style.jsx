import styled from "styled-components";
import { color } from "../../../util/globalstyle"

export const OptionContainer =
    styled.section`
max-width: 500px;
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    margin-top: 50px;
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 2rem;

`
export const SelectBox = styled.div`
height: 40px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    background-color: ${color.optionSelectbox};
    border-radius: 10px;
    margin-top: 15px;
    label{
        margin-left: 1rem;
    }
`

export const CheckBox = styled.input`
background-color: "#fff";
    height: 25px;
    width: 25px;
`

//두번째 차종입력부분

export const InputCarname = styled.input`
    width: 100%;
    height: 40px;
    font-size: 1.5rem;
`


export const Button = styled.button`
    height: 50px;
    width: 100%;
    margin-top: 30px;
    color: white;
    background-color: ${props => props.color};
`