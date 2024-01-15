import React from 'react';
import * as S from './AlertModal.style'
const AlertModal = ({ text, modalHandler }) => {
    const closeWindow = () => {
        modalHandler(prev => !prev)
    }
    return (
        <S.ModalContainer onClick={closeWindow}>
            <S.Modalbox onClick={e => e.stopPropagation()}>
                {text}
            </S.Modalbox>
        </S.ModalContainer>
    );
};

export default AlertModal;