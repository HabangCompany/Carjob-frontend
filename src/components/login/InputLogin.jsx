import React from 'react';
import * as S from './InputLogin.style'
import { Link } from 'react-router-dom';
const InputLogin = () => {

    return (
        <>
            <S.Container>
                <S.InputDiv>
                    <S.Label htmlFor="">아이디</S.Label>
                    <S.Input type="text" placeholder='아이디를 입력해주세요' />
                </S.InputDiv>
                <S.InputDiv>
                    <S.Label htmlFor="">패스워드</S.Label>
                    <S.Input type="password" placeholder='비밀번호를 입력해주세요' />
                </S.InputDiv>
                <S.Button > 로그인</S.Button>
                <Link to="/signup">
                    <S.SignupButton>회원가입</S.SignupButton>
                </Link>
            </S.Container>
        </>
    );
};

export default InputLogin;   