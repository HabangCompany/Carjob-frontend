import React, { useRef, useState } from 'react';
import * as S from './InputSignup.style'
import { Link } from 'react-router-dom';
import { flushSync } from 'react-dom';
import axios from 'axios'
import { signupUrl, idCheckUrl } from '../../util/urlpath';

const InputSignup = () => {
    const [wrongId, setWrongId] = useState({
        "id": false,
        "nickname": false,
        "adress": false,
        "callnumber": false,
        "password": false,
    })
    // 회원가입정보 ref
    const idRef = useRef('')
    const nicknameRef = useRef('')
    const addressRef = useRef('')
    const phonenumberRef = useRef('')
    const passwordRef = useRef('')
    const passwor2dRef = useRef('')


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

    const idDuplicateCheck = async () => {
        const response = await axios.get(idCheckUrl, { params: { username: idRef.current.value } })
            .then(res => console.log(res))
            .catch(error => console.log(error.response.data.message))
    }

    const testapi = async () => {
        //회원가입전송폼
        let signupForm = {
            'username': idRef.current.value,
            'nickname': nicknameRef.current.value,
            'address': addressRef.current.value,
            'phonenumber': phonenumberRef.current.value,
            'password': passwordRef.current.value,
        }
        console.log(signupForm)
        const response = await axios.post(signupUrl, signupForm)
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
                            <S.Input ref={idRef} onChange={Idtest} type='text' placeholder='4자이상 10자이하 영어아이디' />
                            <S.CheckButton onClick={idDuplicateCheck}>중복확인</S.CheckButton>
                        </S.DivFlex>
                        {wrongId['id'] && <S.Wrongtext>아이디가 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox>
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>닉네임</S.Label>
                    <S.InputBox >
                        <S.DivFlex>
                            <S.Input ref={nicknameRef} type='text' placeholder='닉네임을 입력해주세요' />
                            <S.CheckButton>중복확인 </S.CheckButton>
                        </S.DivFlex>
                        {wrongId['nickname'] && <S.Wrongtext>닉네임이 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox >
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>상세 주소</S.Label>
                    <S.InputBox>
                        <S.Input ref={addressRef} type='text' placeholder='시공받을 주소입니다.' />
                    </S.InputBox>
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>연락처</S.Label>
                    <S.InputBox>
                        <S.Input ref={phonenumberRef} type='phone' placeholder='01012345678' />
                        {wrongId['callnumber'] && <S.Wrongtext>연락처가 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox>
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>비빌번호</S.Label>
                    <S.InputBox>
                        <S.Input ref={passwordRef} type='password' placeholder='6자이상 특수 문자포함' />
                        {wrongId['password'] && <S.Wrongtext>번호가 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox>
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>비빌번호 확인</S.Label>
                    <S.InputBox>
                        <S.Input ref={passwor2dRef} type='password' placeholder='6자이상 특수 문자포함' />
                        {wrongId['password'] && <S.Wrongtext>번호가 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox>
                </S.InputDiv>
                <S.SignupButton onClick={testapi}>회원가입</S.SignupButton>

            </S.Container>
        </>
    );
};

export default InputSignup;