import React, { useRef, useState } from 'react';
import * as S from './InputSignup.style'
import { Link } from 'react-router-dom';
import { flushSync } from 'react-dom';
import axios from 'axios'
import { signupUrl, idCheckUrl, nicknameCheckUrl } from '../../util/urlpath';
import AlertModal from '../common/alertModal/AlertModal';

const InputSignup = () => {
    //회원가입실패시 모달창
    const [signUpModal, setSignUpModal] = useState(false)
    const [signUpMessage, setSignUpMessage] = useState('')
    // 로그인중복시 모달창
    const [isLoginDupulicate, setIsLoginDupulicate] = useState(false)
    const [loginMessage, setLoginMessage] = useState('')
    // 닉네임중복시 모달창
    const [isNickNameDupulicate, setIsNickNameDupulicate] = useState(false)
    const [nickNameMessage, setNickNameMessage] = useState('')
    //회원가입유효성
    const [safetySignup, setSafetySignup] = useState({
        id: false,
        nickname: false,
        password: false,
    })
    //잘못된 입력창들
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
    const password2dRef = useRef('')


    const idTest = (e) => {
        const inputText = e.target.value;
        const englishOnlyRegex = /^[a-zA-Z0-9]+$/;
        const specialCharacterRegex = /[~!@#\$%\^&\*\(\)_\+\-=₩\\[\];'\/\?:"]/;
        const koreanRegex = /[ㄱ-힣]/;

        if (inputText.length < 4 || inputText.length >= 11 || specialCharacterRegex.test(inputText) || !englishOnlyRegex.test(inputText) || koreanRegex.test(inputText)) {
            setWrongId(prev => ({ ...prev, "id": true }));
            setSafetySignup(prev => ({ ...prev, id: false }))
        } else {
            setWrongId(prev => ({ ...prev, "id": false }));
        }
    }


    const idDuplicateCheck = async () => {
        let id = idRef.current.value
        if (id === '') {
            setIsLoginDupulicate(prev => !prev)
            setSafetySignup(prev => ({ ...prev, id: false }))
            setLoginMessage("아이디를 입력해주세요")
            return
        }
        if (wrongId['id'] === true) {
            setIsLoginDupulicate(prev => !prev)
            setSafetySignup(prev => ({ ...prev, id: false }))
            setLoginMessage("아이디가 잘못되었어요")
            return
        }

        const response = await axios.get(idCheckUrl, { params: { username: id } })
            .then(res => {
                setIsLoginDupulicate(prev => !prev)
                setSafetySignup(prev => ({ ...prev, id: true }))
                setLoginMessage(res.data.message)
            }).catch(error => {
                console.log(error)
                setIsLoginDupulicate(prev => !prev)
                setLoginMessage(error.response.data.message)
            })
    }
    const nickNameDuplicateCheck = async () => {
        const nickname = nicknameRef.current.value
        if (nickname === '') {
            setIsNickNameDupulicate(prev => !prev)
            setNickNameMessage("닉네임을 입력해주세요")
            return
        }
        if (wrongId['nickname'] === true) {
            setIsNickNameDupulicate(prev => !prev)
            setNickNameMessage("닉네임이 잘못되었어요")
            return
        }

        const response = await axios.get(nicknameCheckUrl, { params: { nickname: nickname } })
            .then(res => {
                setIsNickNameDupulicate(prev => !prev)
                setSafetySignup(prev => ({ ...prev, nickname: true }))
                setNickNameMessage(res.data.message)
            }).catch(error => {
                console.log(error)
                setIsNickNameDupulicate(prev => !prev)
                setNickNameMessage(error.response.data.message)
            })
    }

    const passwordCheck = () => {
        const pw1 = passwordRef.current.value
        const pw2 = password2dRef.current.value
        if (pw1 === pw2) {
            setWrongId(prev => ({ ...prev, password: false }))
            setSafetySignup(prev => ({ ...prev, password: true }))
        }
        if (pw1 === '' || pw2 === '') {
            setWrongId(prev => ({ ...prev, password: true }))
            return false
        }

    }
    const testapi = async () => {
        if (passwordCheck() === false) {
            return
        }
        if (safetySignup['id'] === false || safetySignup['nickname'] === false || safetySignup['password'] === false) {
            console.log("회원가입불가")
            return
        }
        const username = idRef.current.value
        const nickname = nicknameRef.current.value
        const address = addressRef.current.value
        const phonenumber = phonenumberRef.current.value
        const password = passwordRef.current.value
        if (username == '' || nickname == '' || address == '' || phonenumber == '' || password == '') {
            setSignUpModal(prev => !prev)
            setSignUpMessage("회원가입 양식을 확인해주세요")
            return
        }
        //회원가입전송폼
        let signupForm = {
            'username': username,
            'nickname': nickname,
            'address': address,
            'phonenumber': phonenumber,
            'password': password
        }
        console.log(signupForm)
        const response = await axios.post(signupUrl, signupForm)
            .then(res => {
                console.log(res)
                setSignUpModal(prev => !prev)
                setSignUpMessage("회원가입이 성공적으로 되었습니다")
            })
            .catch(error => {
                setSignUpModal(prev => !prev)
                setSignUpMessage("회원가입 양식을 맞춰주세요")
            })
    }

    console.log(safetySignup)
    return (
        <>
            <S.Container>
                {signUpModal && <AlertModal text={signUpMessage} modalHandler={setSignUpModal} />}
                {isLoginDupulicate && <AlertModal text={loginMessage} modalHandler={setIsLoginDupulicate} />}
                {isNickNameDupulicate && <AlertModal text={nickNameMessage} modalHandler={setIsNickNameDupulicate} />}
                <S.InputDiv>
                    <S.Label> <S.Important>*</S.Important> 아이디</S.Label>
                    <S.InputBox >
                        <S.DivFlex>
                            <S.Input ref={idRef} onChange={idTest} type='text' placeholder='4자이상 10자이하 영어아이디' />
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
                            <S.CheckButton onClick={nickNameDuplicateCheck}>중복확인 </S.CheckButton>
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
                        <S.Input ref={passwordRef} type='password' placeholder='비밀번호를 입력해주세요' />
                        {wrongId['password'] && <S.Wrongtext>비밀번호가 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox>
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label><S.Important>*</S.Important>비빌번호 확인</S.Label>
                    <S.InputBox>
                        <S.Input ref={password2dRef} type='password' placeholder='비밀번호를 다시 입력해주세요' />
                        {wrongId['password'] && <S.Wrongtext>비밀번호가 잘못됫어요 !!</S.Wrongtext>}
                    </S.InputBox>
                </S.InputDiv>
                <S.SignupButton onClick={testapi}>회원가입</S.SignupButton>

            </S.Container>
        </>
    );
};

export default InputSignup;