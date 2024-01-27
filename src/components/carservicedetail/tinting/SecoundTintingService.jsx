import React, { useState } from 'react';
import * as S from './TintingService.style'
/** 차종을 입력하는 컴포넌트 */
const SecoundTintingService = () => {
    const [optionSelectState, setOptionSelectState] = useState([])
    const [buttonColor, setButtonColor] = useState('#ccc')
    const [carName, setCarName] = useState('')
    const [carYear, setCarYear] = useState('')

    // 옵션있으면 색상
    // useEffect(() => {
    //     if (optionSelectState.length == 0) {
    //         setButtonColor("#ccc")
    //     } else {
    //         setButtonColor("#7a7aff")

    //     }
    // }, [])
    const carNameHandler = (e) => {
        setCarName(e.target.value)
    }
    const carYearHandler = (e) => {
        setCarYear(e.target.value)
    }
    console.log(carName)

    const nextOtionHandler = () => { }
    return (
        <>
            <S.Title>차종을 입력 해주세요</S.Title>
            <S.OptionContainer>
                <div>
                    <div>차종</div>
                    <S.InputCarname onChange={carNameHandler} type='text' id='carname'></S.InputCarname>
                </div>
                <div>
                    <div>연식</div>
                    <S.InputCarname onChange={carYearHandler} type='number' id='carname'></S.InputCarname>
                </div>
                <label htmlFor="carname"></label>
                <S.Button color={buttonColor} onClick={nextOtionHandler}>다음</S.Button>
            </S.OptionContainer>
        </>
    );
};

export default SecoundTintingService;