import React, { useRef, useState } from 'react';
import ImageUpload from './imageUpload/ImageUpload';
import DaumPostCode from './daumpostcode/DaumPostCode';
import SkillTag from './skilltag/SkillTag';
import * as S from './StoreRegister.style'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../../util/cookie';

const StoreRegister = () => {
    const [isZipCode, setIsZipCode] = useState(false)
    const [addressInfo, setAddressInfo] = useState({})
    const [storeThumbnailImage, setStoreThumbnailImage] = useState([])
    const [storeImage, setStoreImage] = useState([])
    const [skillList, setSkillList] = useState([])
    const navigate = useNavigate()

    //업체가입정보들
    const storeName = useRef('')
    const storeTel = useRef('')
    const storeDescription = useRef('')
    const storeZoneCode = useRef('')
    const storeAddress = useRef('')
    const storeDetailAddress = useRef('')

    // 업체 썸네일 업로드
    const storeThumbnailImageHandler = (image) => {
        setStoreThumbnailImage(image)
    }
    //업체 사진업로드
    const storeimageHandler = (imagelist) => {
        setStoreImage(imagelist)
    }
    //업체 스킬 업로드
    const storeSkillHandler = (skillList) => {
        setSkillList(skillList)
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
        setAddressInfo(prev => ({
            ...prev,
            address,
            jibunAddress,
            zonecode
        }
        ))
    }

    const submitHandler = async () => {
        const storeInfo = JSON.stringify(
            {
                storeName: storeName.current.value,
                storeTel: storeTel.current.value,
                storeDescription: storeDescription.current.value,
                address: storeAddress.current.value,
                zonecode: storeZoneCode.current.value,
                detailAddress: storeDetailAddress.current.value,
                storeSkill: skillList,
            }
        )

        const formdata = new FormData()
        formdata.append("data", storeInfo)
        formdata.append("storeThumbnailImage", storeThumbnailImage[0])
        storeImage.forEach((image, index) => {
            formdata.append("storeImage", image, `storeImage-${index}.jpg`)
        })


        console.log(Array.from(formdata.entries()));
        const url = 'http://localhost:8000/account/store_register/ '
        const token = getCookie('access_token')
        console.log(token)
        await axios.post(url, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    return (
        <>
            <S.Container>
                <h2>환영 합니다 업주 여러분</h2>
                <h3>카잡에 등록하여 많은 혜택을 누려보세요</h3>
                <S.Field>
                    <S.Title>업체 명</S.Title>
                    <S.Input type="text" placeholder='사업자 이름' autoFocus ref={storeName} />
                </S.Field>
                <S.Field>
                    <S.Title>업체 연락처</S.Title>
                    <S.Input type="tel" placeholder='연락처를 입력해주세요' ref={storeTel} />
                </S.Field>

                <S.Field>
                    <S.Title>업체 설명</S.Title>
                    <S.Input placeholder="업체를 설명해주세요" ref={storeDescription} />
                </S.Field>
                <S.Field>
                    <S.Title>대표 사진</S.Title>
                    <ImageUpload imageHandler={storeThumbnailImageHandler} />
                    <S.Title>업체 사진</S.Title>
                    <ImageUpload imageHandler={storeimageHandler} multiple />
                </S.Field>

                <S.Field>
                    <S.Title>업체 주소</S.Title>
                    <S.Input type="text" placeholder='우편번호' value={addressInfo.zonecode} ref={storeZoneCode} />
                    <button onClick={addressFinder}>주소찾기</button>
                    {isZipCode && <DaumPostCode storeAddressHandler={storeAddressHandler} />}
                    <div>
                        <div>
                            <S.Input type="text" placeholder='주소' value={addressInfo.address} ref={storeAddress} />
                        </div>
                        <div>
                            <S.Input type="text" placeholder='상세주소' ref={storeDetailAddress} />
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
        </>
    );
};

export default StoreRegister;