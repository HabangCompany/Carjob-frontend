import React, { useState, useRef, useEffect } from 'react';
import * as S from './ImageUpload.style'
import ImageUploadSVG from '@/assets/image_upload.svg';


const ImageUpload = ({ storeimageHandler }) => {
    const [selectedImages, setSelectedImages] = useState([]);
    const inputRef = useRef(null)

    useEffect(() => {
        storeimageHandler(selectedImages)
    }, [selectedImages])

    const handleFileChange = (e) => {
        if (!selectedImages.length === 0) {
            setSelectedImages([])
        }

        setSelectedImages([])
        const files = e.target.files;
        // 이미지 파일만 필터링
        const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));

        // 최대 10장까지만 선택하도록 제한
        if (imageFiles.length + selectedImages.length > 10) {
            alert('최대 10장까지만 선택할 수 있습니다.');
            return;
        }

        // 선택한 이미지들을 상태에 추가
        setSelectedImages(prevImages => [...prevImages, ...imageFiles]);
    };


    const handleImageClick = () => {
        inputRef.current.click();
    };




    return (
        <>
            <input type="file" ref={inputRef} accept="image/*" multiple onChange={handleFileChange} style={{ display: "none" }} />
            <S.ImageDragBox onClick={handleImageClick} >
                <img src={ImageUploadSVG} alt="" draggable={false} />
            </S.ImageDragBox>
            {/* 선택한 이미지들을 나타내는 예시 */}
            <div>
                {selectedImages.map((image, index) => (
                    <img key={index} src={URL.createObjectURL(image)} alt={`업체사진 ${index + 1}`} style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }} />
                ))}
            </div>
        </>
    );
};

export default ImageUpload;