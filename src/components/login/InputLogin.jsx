import React, { useRef } from 'react';
import * as S from './InputLogin.style'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCookie } from '../../util/cookie';
import { useRecoilState } from 'recoil';
import { isLogined } from '../../atom/globalstate';



const InputLogin = () => {
    const [loginState, setLoginState] = useRecoilState(isLogined)
    const navigator = useNavigate()
    const id = useRef()
    const password = useRef()

    const loginHandler = async (e) => {
        e.preventDefault()
        const url = "http://localhost:8000/account/login/";
        try {
            const response = await axios.post(url, {
                username: id.current.value,  // 서버에서 요구하는 키 이름으로 변경
                password: password.current.value
            })
                .then(res => {
                    const refresh_token = res.data['refresh_token']
                    const access_token = res.data['access_token']
                    setCookie("refresh_token", refresh_token)
                    setCookie("access_token", access_token)
                    setLoginState(true)
                    navigator('/')
                }
                )
        } catch (error) {
            if (error.response.status === 400) {
                console.log("아이디비번을 확인해주세요")
            }
            console.error(error.response);  // 에러 응답이 있는 경우 에러 메시지 출력
        }
    }
    return (
        <>
            <S.Container>
                <form onSubmit={loginHandler}>
                    <S.InputDiv>
                        <S.Label htmlFor="">아이디</S.Label>
                        <S.Input ref={id} type="text" placeholder='아이디를 입력해주세요' />
                    </S.InputDiv>
                    <S.InputDiv>
                        <S.Label htmlFor="">패스워드</S.Label>
                        <S.Input ref={password} type="password" placeholder='비밀번호를 입력해주세요' />
                    </S.InputDiv>
                    <S.Button onClick={loginHandler}> 로그인</S.Button>
                    <Link to="/signup">
                        <S.SignupButton>회원가입</S.SignupButton>
                    </Link>
                </form>
            </S.Container>
        </>
    );
};

export default InputLogin;   