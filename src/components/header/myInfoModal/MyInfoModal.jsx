import React from 'react';
import * as S from './MyInfoModal.style'
import { useRecoilState, } from 'recoil';
import { MyInfoModalState } from '../../../atom/globalstate';
import closeIcon from '@/assets/close.svg'
import profilImage from '@/assets/logo.jpg'

const MyInfoModal = () => {

    const [isModal, setIsModal] = useRecoilState(MyInfoModalState)
    const ModalCloseHandler = () => {
        setIsModal(!isModal)
    }

    return (
        <S.Container>
            <S.InfoModalHeader>
                <S.ProfileBox>
                    <S.ProfileImage src={profilImage} alt="" />
                    <S.NickName>
                        닉네임입니다
                    </S.NickName>
                </S.ProfileBox>
                <div onClick={ModalCloseHandler}>
                    <S.Closebutton src={closeIcon} alt="" />
                </div>
            </S.InfoModalHeader>
        </S.Container>
    );
};

export default MyInfoModal;