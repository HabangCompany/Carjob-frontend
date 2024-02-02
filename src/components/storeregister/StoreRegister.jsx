import React, { useRef, useState } from 'react';
import ImageUpload from './imageUpload/ImageUpload';
import DaumPostCode from './daumpostcode/DaumPostCode';
import SkillTag from './skilltag/SkillTag';
import * as S from './StoreRegister.style'
import { useNavigate } from 'react-router-dom';

const StoreRegister = () => {
    const [isZipCode, setIsZipCode] = useState(false)
    const [storeInfo, setStoreInfo] = useState({
        storeName: "",
        storenTel: "",
        storeDescription: "",
        storeImage: [],
        storeAddress: "",
        storeSkill: "",
    })
    const navigate = useNavigate()

    //업체가입정보들
    const storeName = useRef()
    const storenTel = useRef()
    const storeDescription = useRef()



    const goToHome = () => {
        navigate('/')
    }

    //주소찾기 버튼
    const addressFinder = () => {
        setIsZipCode(prev => !prev)
    }

    console.log(storeInfo)
    return (
        <S.Container>
            <h2>환영 합니다 업주 여러분</h2>
            <h3>카잡에 등록하여 많은 혜택을 누려보세요</h3>
            <S.Field>
                <S.Title>업체 명</S.Title>
                <S.Input type="text" placeholder='사업자 이름' autoFocus ref={storeName} />
            </S.Field>
            <S.Field>
                <S.Title>업체 연락처</S.Title>
                <S.Input type="tel" placeholder='연락처를 입력해주세요' ref={storenTel} />
            </S.Field>

            <S.Field>
                <S.Title>업체 설명</S.Title>
                <S.Input placeholder="업체를 설명해주세요" ref={storeDescription} />
            </S.Field>
            <S.Field>
                <S.Title>업체 사진</S.Title>
                <ImageUpload setStoreInfo={setStoreInfo} />
            </S.Field>

            <S.Field>
                <S.Title>업체 주소</S.Title>
                <S.Input type="text" placeholder='우편번호' />
                <button onClick={addressFinder}>주소찾기</button>
                {isZipCode && <DaumPostCode />}
                <div>
                    <div>
                        <S.Input type="text" placeholder='주소' />
                    </div>
                    <div>
                        <S.Input type="text" placeholder='상세주소' />
                    </div>
                </div>
            </S.Field>

            <S.Field>
                <div></div>
                <SkillTag />
            </S.Field>


            <S.Field>
                <button type='submit'>업체로 등록하기</button>

            </S.Field>
            <button onClick={goToHome}>돌아가기</button>
        </S.Container >
    );
};

export default StoreRegister;