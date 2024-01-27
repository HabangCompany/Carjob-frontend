import React, { useEffect, useState } from 'react';
import * as S from './TintingService.style'

/** 시공부위를 선택하는 컴포넌트 */
const TintingService = () => {

    const [optionSelectState, setOptionSelectState] = useState([])
    const [buttonColor, setButtonColor] = useState('#ccc')

    // 옵션있으면 색상
    useEffect(() => {
        if (optionSelectState.length == 0) {
            setButtonColor("#ccc")
        } else {
            setButtonColor("#7a7aff")

        }
    }, [optionSelectState])

    //옵션 선택 함수
    const optionChangeHandler = (e) => {
        if (optionSelectState.includes(e.target.value)) {
            setOptionSelectState(optionSelectState.filter(option => option !== e.target.value))
        } else {
            setOptionSelectState([...optionSelectState, e.target.value])
        }
    }
    const nextOtionHandler = () => {
        if (optionSelectState.length > 0) {
            console.log("옵션이 선택됨")
        } else {
            console.log("옵션이 선택안됨")

        }
    }


    return (
        <>

            <S.Title>
                시공부위를 선택해주세요
            </S.Title>
            <S.OptionContainer>
                <S.SelectBox>
                    <S.CheckBox type='checkbox' id='전체썬팅' value={"전체썬팅"} onChange={optionChangeHandler} />
                    <label htmlFor='전체썬팅'>전체 썬팅</label>
                </S.SelectBox>
                <S.SelectBox>
                    <S.CheckBox type='checkbox' id='전면썬팅' value={"전면썬팅"} onChange={optionChangeHandler} />
                    <label htmlFor='전면썬팅'>전면 썬팅</label>
                </S.SelectBox>
                <S.SelectBox>
                    <S.CheckBox type='checkbox' id='측후면썬팅' value={"측후면썬팅"} onChange={optionChangeHandler} />
                    <label htmlFor='측후면썬팅'>측후면 썬팅</label>
                </S.SelectBox>
                <S.SelectBox>
                    <S.CheckBox type='checkbox' id='후면썬팅' value={"후면썬팅"} onChange={optionChangeHandler} />
                    <label htmlFor='후면썬팅'>후면 썬팅</label>
                </S.SelectBox>

                <S.Button color={buttonColor} onClick={nextOtionHandler}>다음</S.Button>
            </S.OptionContainer>
        </>
    );
};

export default TintingService;

