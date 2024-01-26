import React, { useState } from 'react';
import NextButton from '../../common/car_service_option_button/NextButton';
/** 시공지역을 입력하는 컴포넌트 */
const ThirdTintingService = () => {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const regions = ['서울', '인천', '경기'];

    const handleRegionClick = (region) => {
        // 클릭된 지역을 상태에 저장
        setSelectedRegion(region);
    };

    return (
        <div>
            <div>
                지역을 선택해주세요
            </div>
            <ul>
                {regions.map((region, index) => (
                    <li key={index} onClick={() => handleRegionClick(region)}>
                        {region}
                    </li>
                ))}
            </ul>

            {selectedRegion && (
                <div>
                    <p>{selectedRegion}의 행정구역 목록:</p>
                    {/* 서울의 행정구역 목록 예시 */}
                    {selectedRegion === '서울' && (
                        <ul>
                            <li>강남구</li>
                            <li>강서구</li>
                            <li>관악구</li>
                            {/* 추가적인 행정구역들을 나열하세요 */}
                        </ul>
                    )}
                    {/* 다른 지역에 대한 행정구역 목록도 유사한 방식으로 추가하세요 */}
                </div>
            )}

            <NextButton value={"다음"} />
        </div>
    );
};

export default ThirdTintingService;
