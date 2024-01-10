import React from 'react';
import * as S from './MyInfoModal.style'
import { useRecoilState, } from 'recoil';
import { MyInfoModalState } from '../../../atom/globalstate';
import closeIcon from '@/assets/close.svg'
import profilImage from '@/assets/logo.jpg'


const category = [
    "구인 글쓰기",
    "구직 글쓰기"

]
const MyInfoModal = () => {

    const [isModal, setIsModal] = useRecoilState(MyInfoModalState)
    const ModalCloseHandler = () => {
        setIsModal(!isModal)
    }

    return (
        <S.BackGround onClick={ModalCloseHandler}>
            <S.Container onClick={(e) => e.stopPropagation()}>
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
                {category.map((item) => {
                    return (
                        <>
                            <S.Category>
                                {item}
                            </S.Category>
                        </>
                    )
                })
                }
                <S.Category>업체로 등록하기</S.Category>
            </S.Container>
        </S.BackGround >
    );
};

export default MyInfoModal;