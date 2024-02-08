import React, { useRef, useState } from 'react';
import ImageUpload from './imageUpload/ImageUpload';
import DaumPostCode from './daumpostcode/DaumPostCode';
import SkillTag from './skilltag/SkillTag';
import * as S from './StoreRegister.style'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StoreRegister = () => {
    const [isZipCode, setIsZipCode] = useState(false)
    const [storeInfo, setStoreInfo] = useState({
        storeName: "",
        storeTel: "",
        storeDescription: "",
        storeImage: [],
        address: "",
        jibunAddress: "",
        zonecode: "",
        detailAddress: "",
        storeSkill: [],
    })
    const navigate = useNavigate()

    //업체가입정보들
    const storeName = useRef()
    const storeTel = useRef()
    const storeDescription = useRef()
    const storeDetailAddress = useRef()

    //업체 명, 연락처, 상세주소
    const storeInfoUpdate = () => {
        setStoreInfo((prev) => ({
            ...prev,
            storeDescription: storeDescription.current.value,
            storeName: storeName.current.value,
            storeTel: storeTel.current.value,
            detailAddress: storeDetailAddress.current.value
        }))
    }
    //업체 사진업로드
    const storeimageHandler = (imagelist) => {
        setStoreInfo(prev => ({
            ...prev,
            storeImage: imagelist
        }))
    }
    //업체 스킬 업로드
    const storeSkillHandler = (skillList) => {
        setStoreInfo(prev => ({
            ...prev,
            storeSkill: skillList
        }))
    }
    //집보내기
    const goToHome = () => {
        navigate('/')
    }

    //주소찾기 버튼
    const addressFinder = () => {
        setIsZipCode(prev => !prev)
    }

    //업체 주소 업로드
    const storeAddressHandler = (address, jibunAddress, zonecode,) => {
        setStoreInfo(prev => ({
            ...prev,
            address,
            jibunAddress,
            zonecode
        }
        ))
    }

    const submitHandler = async () => {
        const url = 'http://localhost:8000/account/store_register/'
        await axios.post(url, storeInfo)
            .then(res => console.log(res))
            .catch(error => console.log(error))

    }
    console.log(storeInfo)
    return (
        <S.Container>
            <h2>환영 합니다 업주 여러분</h2>
            <h3>카잡에 등록하여 많은 혜택을 누려보세요</h3>
            <S.Field>
                <S.Title>업체 명</S.Title>
                <S.Input type="text" placeholder='사업자 이름' autoFocus ref={storeName} onChange={storeInfoUpdate} />
            </S.Field>
            <S.Field>
                <S.Title>업체 연락처</S.Title>
                <S.Input type="tel" placeholder='연락처를 입력해주세요' ref={storeTel} onChange={storeInfoUpdate} />
            </S.Field>

            <S.Field>
                <S.Title>업체 설명</S.Title>
                <S.Input placeholder="업체를 설명해주세요" ref={storeDescription} onChange={storeInfoUpdate} />
            </S.Field>
            <S.Field>
                <S.Title>업체 사진</S.Title>

                <ImageUpload storeimageHandler={storeimageHandler} />
            </S.Field>

            <S.Field>
                <S.Title>업체 주소</S.Title>
                <S.Input type="text" placeholder='우편번호' value={storeInfo.zonecode} />
                <button onClick={addressFinder}>주소찾기</button>
                {isZipCode && <DaumPostCode storeAddressHandler={storeAddressHandler} />}
                <div>
                    <div>
                        <S.Input type="text" placeholder='주소' value={storeInfo.address} />
                    </div>
                    <div>
                        <S.Input type="text" placeholder='상세주소' ref={storeDetailAddress} onChange={storeInfoUpdate} />
                    </div>
                </div>
            </S.Field>

            <S.Field>
                <div></div>
                <SkillTag storeSkillHandler={storeSkillHandler} />
            </S.Field>


            <S.Field>
                <button type='submit' onClick={submitHandler}>업체로 등록하기</button>

            </S.Field>
            <button onClick={goToHome}>돌아가기</button>
        </S.Container >
    );
};

export default StoreRegister;