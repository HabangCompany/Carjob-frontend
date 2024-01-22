import React from 'react';
import * as S from './AlertModal.style'
import { useNavigate } from 'react-router-dom';
const AlertModal = ({ text, modalHandler }) => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }
    const closeWindow = () => {
        modalHandler(prev => !prev)
    }

    if (text == "회원가입이 성공적으로 되었습니다") {

        return (
            <S.ModalContainer onClick={goToHome}>
                <S.Modalbox onClick={e => e.stopPropagation()}>
                    {text}
                </S.Modalbox>
            </S.ModalContainer>)
    } else {
        return (
            <S.ModalContainer onClick={closeWindow}>
                <S.Modalbox onClick={e => e.stopPropagation()}>
                    {text}
                </S.Modalbox>
            </S.ModalContainer>)
    }
};

export default AlertModal;