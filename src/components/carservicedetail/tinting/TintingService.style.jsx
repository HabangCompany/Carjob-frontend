import styled from "styled-components";
import { color } from "../../../util/globalstyle";

export const OptionContainer = styled.section`
    max-width: 500px;
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    margin-top: 50px;
    padding: 0 10px;
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 2rem;

    @media screen and (max-width: 350px) {
        font-size: 1.6rem;
    }
`;

export const SelectBox = styled.div`
    height: 40px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    background-color: ${color.optionSelectbox};
    border-radius: 10px;
    margin-top: 15px;
    font-size: 1.1rem;
    font-weight: 700;

    label {
        margin-left: 1rem;
    }
`;

export const CheckBox = styled.input`
    background-color: "#fff";
    height: 25px;
    width: 25px;
`;

// 두번째 차종 입력 부분
export const InputCarname = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    font-size: 1.5rem;
`;

export const TextArea = styled.textarea`
    box-sizing: border-box;
    font-size: 1.5rem;
    width: 100%;
    height: 70px;
`;

export const WarningText = styled.div`
    box-sizing: border-box;
    margin-top: 1rem;
    text-align: left;
`;

export const Button = styled.button`
    height: 50px;
    width: 100%;
    margin-top: 30px;
    color: white;
    background-color: ${props => props.propsColor};
`;

// 세번째 지역 선택
export const DetailRegion = styled.div`
    box-sizing: border-box;
    text-align: left;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
`;

export const DetailRegions = styled.div`
    display: flex;
    justify-content: space-between;
    height: ${props => props.propsHeight || "35px"};
    line-height: ${props => props.propsHeight || "35px"};
    background-color: ${props => props.propsColor};
    font-size: 1.1rem;
    font-weight: 700;
    padding: 5px 5px;
    border-bottom: 1px solid black;
`;

// 글씨 폰트들
export const ColorRed = styled.span`
    color: #ff6f61;
`;
