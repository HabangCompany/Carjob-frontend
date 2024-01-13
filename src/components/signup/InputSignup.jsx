import React, { useState } from 'react';
import * as S from './InputSignup.style'
import { Link } from 'react-router-dom';
import { flushSync } from 'react-dom';
import axios from 'axios'
import { signupUrl } from '../../util/urlpath';

const InputSignup = () => {
    const [wrongId, setWrongId] = useState({
        "id": false,
        "nickname": false,
        "adress": false,
        "callnumber": false,
        "password": false,
    })

    const Idtest = (e) => {
        const inputText = e.target.value;
        const englishOnlyRegex = /^[a-zA-Z]+$/;
        const specialCharacterRegex = /[~!@#\$%\^&\*\(\)_\+\-=₩\\[\];'\/\?:"]/;
        if (inputText.length === 0) {
            setWrongId(prev => ({ ...prev, "id": false }));
            return
        }
        if (inputText.length < 4 || inputText.length >= 11 || specialCharacterRegex.test(inputText) || !englishOnlyRegex.test(inputText)) {
            setWrongId(prev => ({ ...prev, "id": true }));
            setTimeout(() => {
                setWrongId((prev) => ({ ...prev, id: false }));
            }, 2000);
        } else {
            setWrongId(prev => ({ ...prev, "id": false }));
        }
    }

    const testapi = async () => {
        const response = await axios.post(signupUrl, {
            data: "프론트엔드회원가입요청"
        })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }


    return (
        <>
            <S.Container>
                <S.InputDiv>
                    <S.Label> <S.Important>*</S.Important> 아이디</S.Label>
                    <S.InputBox >
                        <S.DivFlex>
                            <S.Input onChange={Idtest} type='text' placeholder='4자이상 10자이하 영어아이디' />
                            <S.CheckButton>중복확인</S.CheckButton>
                        </S.DivFlex>
                        {wrongId['id'] && <S.Wrongtext>아이디가 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox>
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>닉네임</S.Label>
                    <S.InputBox >
                        <S.DivFlex>
                            <S.Input type='text' placeholder='닉네임을 입력해주세요' />
                            <S.CheckButton>중복확인 </S.CheckButton>
                        </S.DivFlex>
                        {wrongId['nickname'] && <S.Wrongtext>닉네임이 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox >
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>상세 주소</S.Label>
                    <S.InputBox>
                        <S.Input type='text' placeholder='시공받을 주소입니다.' />
                    </S.InputBox>
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>연락처</S.Label>
                    <S.InputBox>
                        <S.Input type='phone' placeholder='01012345678' />
                        {wrongId['callnumber'] && <S.Wrongtext>연락처가 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox>
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>비빌번호</S.Label>
                    <S.InputBox>
                        <S.Input type='password' placeholder='6자이상 특수 문자포함' />
                        {wrongId['password'] && <S.Wrongtext>번호가 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox>
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>비빌번호 확인</S.Label>
                    <S.InputBox>
                        <S.Input type='password' placeholder='6자이상 특수 문자포함' />
                        {wrongId['password'] && <S.Wrongtext>번호가 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox>
                </S.InputDiv>
                <S.SignupButton onClick={testapi}>회원가입</S.SignupButton>

            </S.Container>
        </>
    );
};

export default InputSignup;