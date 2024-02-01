import React, { useState } from 'react';

const StoreRegister = () => {

    const [selectedImages, setSelectedImages] = useState([]);

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
            console.log('최대 10장까지만 선택할 수 있습니다.');
            return;
        }

        // 선택한 이미지들을 상태에 추가
        setSelectedImages(prevImages => [...prevImages, ...imageFiles]);
    };
    console.log(selectedImages)
    return (
        <div>
            <h2>환영 합니다 업주 여러분</h2>
            <div>
                <div>업체명</div>
                <input type="text" />
            </div>
            <div>
                <div>업체설명</div>
                <textarea rows={10} ></textarea>
            </div>

            <div>
                <div>업체사진</div>
                <input type="file" accept="image/*" multiple onChange={handleFileChange} />
                {/* 선택한 이미지들을 나타내는 예시 */}
                <div>
                    {selectedImages.map((image, index) => (
                        <img key={index} src={URL.createObjectURL(image)} alt={`업체사진 ${index + 1}`} style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }} />
                    ))}
                </div>
            </div>


            <div>
                주소
                <input type="text" pla />

            </div>

        </div >
    );
};

export default StoreRegister;