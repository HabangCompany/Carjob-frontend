import React, { useState, useEffect } from 'react';
import * as S from './TintingService.style'
/** 차종을 입력하는 컴포넌트 */
const SecoundTintingService = () => {
    const [optionSelectState, setOptionSelectState] = useState([])
    const [buttonColor, setButtonColor] = useState('#ccc')
    const [carName, setCarName] = useState('')


    // 옵션있으면 색상
    useEffect(() => {
        if (!carName) {
            setButtonColor("#ccc")
        } else {
            setButtonColor("#7a7aff")

        }
    }, [carName])
    const carNameHandler = (e) => {
        setCarName(e.target.value)
    }



    const nextOtionHandler = () => {
        if (carName) {

        } else {
            console.log("차종을 입력해주세요")
        }
    }
    return (
        <>
            <S.Title>차종과 연식을 입력해주세요</S.Title>
            <S.OptionContainer>
                <div>
                    <div></div>
                    <S.TextArea onChange={carNameHandler} placeholder='ex) 2023 소나타' />
                    <S.WarningText>

                        <div>*자동차 썬팅의 경우 연식에 따라 자동차 유리가 달라질 수 있습니다 <br /> <S.ColorRed>반드시 정확히 입력해야합니다 </S.ColorRed> </div>
                        <div>*4도어 5도어 모델의경우 기입을 해주셔야합니다 ex) i40 5도어</div>

                        사진첨부시
                        <div></div>
                        <input type='file' accept='image/*'></input>

                    </S.WarningText>
                </div>

                <label htmlFor="carname"></label>
                <S.Button color={buttonColor} onClick={nextOtionHandler}>다음</S.Button>
            </S.OptionContainer >
        </>
    );
};

export default SecoundTintingService;