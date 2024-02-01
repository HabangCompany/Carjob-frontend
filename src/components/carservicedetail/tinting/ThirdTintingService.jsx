import React, { useState, useEffect } from 'react';
import NextButton from '../../common/car_service_option_button/NextButton';
import * as S from './TintingService.style'
/** 시공지역을 입력하는 컴포넌트 */
const ThirdTintingService = () => {
    const [buttonColor, setButtonColor] = useState('#ccc')
    const [detailRegionColor, setDetailRegionColor] = useState('#fff')
    const [detailRegionHeight, setDetailRegionHeight] = useState('50px')

    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedDetaildRegion, setSelectedDetailRegion] = useState('');
    const regions = ['서울', '인천', '경기'];
    useEffect(() => {
        if (finalRegion.length === 2) {
            setButtonColor("#7a7aff")
        } else {
            setButtonColor("#ccc")

        }
    }, [finalRegion])
    const seoul = [
        '종로구',
        '중구',
        '성동구',
        '광진구',
        '동대문구',
        '중랑구',
        '성북구',
        '강북구',
        '도봉구',
        '노원구',
        '은평구',
        '서대문구',
        '마포구',
        '양천구',
        '강서구',
        '구로구',
        '금천구',
        '영등포구',
        '동작구',
        '관악구',
        '서초구',
        '강남구',
        '송파구',
        '강동구'
    ];
    const incheon = [
        '중구',
        '동구',
        '미추홀구',
        '연수구',
        '남동구',
        '부평구',
        '계양구',
        '서구',
        '강화군',
        '옹진군'
    ];
    const gyeonggi = [
        '수원시',
        '성남시',
        '고양시',
        '용인시',
        '부천시',
        '안산시',
        '안양시',
        '남양주시',
        '화성시',
        '평택시',
        '의정부시',
        '시흥시',
        '파주시',
        '광명시',
        '김포시',
        '군포시',
        '광주시',
        '이천시',
        '양주시',
        '오산시',
        '구리시',
        '남양주시',
        '안성시',
        '포천시',
        '의왕시',
        '하남시',
        '여주시',
        '양평군',
        '가평군',
        '연천군'
    ];



    const handleRegionClick = (region) => {
        // 클릭된 지역을 상태에 저장
        if (selectedRegion === region) {
            setSelectedRegion('')
            setFinalRegion([])
            setDetailRegionColor('#fff')
            return
        }
        setSelectedRegion(region);
        setFinalRegion([])
    };
    const handleDetailRegionClick = (detailRegion) => {
        setDetailRegionColor('#c7b2ff')
        setSelectedDetailRegion(detailRegion)
        setFinalRegion([selectedRegion, detailRegion])
    }

    console.log(finalRegion)
    return (
        <div>
            <S.Title>
                지역을 선택해주세요
            </S.Title>
            <S.OptionContainer>
                {regions.map((region, index) => (
                    <div key={index}>
                        <S.SelectBox onClick={() => handleRegionClick(region)}>
                            {region}
                        </S.SelectBox>
                        {selectedRegion === region && (
                            <S.DetailRegion>
                                {region === '서울' && seoul.map((item, idx) => (
                                    <S.DetailRegions
                                        key={idx}
                                        propsColor={() => {
                                            if (selectedDetaildRegion === item) {
                                                return (detailRegionColor)
                                            }
                                        }}
                                        propsHeight={() => {
                                            if (selectedDetaildRegion === item) {
                                                return (detailRegionHeight)
                                            }
                                        }}
                                        onClick={() => handleDetailRegionClick(item)}>
                                        {item}
                                        {selectedDetaildRegion === item ? <button>다음</button> : null}
                                    </S.DetailRegions>
                                ))}
                                {region === '인천' && incheon.map((item, idx) => (
                                    <S.DetailRegions
                                        key={idx}
                                        color={selectedDetaildRegion === item ? detailRegionColor : 'white'}
                                        height={selectedDetaildRegion === item ? detailRegionHeight : 'auto'}
                                        onClick={() => handleDetailRegionClick(item)}
                                    >
                                        {item}
                                        {selectedDetaildRegion === item ? <button>다음</button> : null}
                                    </S.DetailRegions>
                                ))}
                                {region === '경기' && gyeonggi.map((item, idx) => (
                                    <S.DetailRegions
                                        key={idx}
                                        propsColor={() => {
                                            if (selectedDetaildRegion === item) {
                                                return (detailRegionColor)
                                            }
                                        }}
                                        propsHeight={() => {
                                            if (selectedDetaildRegion === item) {
                                                return (detailRegionHeight)
                                            }
                                        }}
                                        onClick={() => handleDetailRegionClick(item)}>
                                        {item}
                                        {selectedDetaildRegion === item ? <button>다음</button> : null}
                                    </S.DetailRegions>
                                ))}


                            </S.DetailRegion>
                        )}
                    </div>
                ))
                }
                <S.Button propsColor={buttonColor}> 찾아보기</S.Button>
            </S.OptionContainer >
        </div >
    );

};

export default ThirdTintingService;
