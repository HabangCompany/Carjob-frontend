import { useState, useRef } from 'react';
import ShopCard from '../ShopCard';
import * as S from './MainHeader.style';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollRef = useRef(null);

    const mouseDownHandler = (event) => {
        setIsDrag(true);
        setStartX(event.clientX - scrollRef.current.offsetLeft);
    };

    const mouseMoveHandler = (event) => {
        if (!isDrag) return;

        const x = event.clientX - scrollRef.current.offsetLeft;
        const distance = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - distance;
    };

    const mouseUpHandler = () => {
        setIsDrag(false);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const clickHandler = (event) => {
        // // 클릭 이벤트를 막음
        // event.preventDefault();
        // // 클릭한 사진에 대한 로직을 추가할 수 있음
        // console.log('사진을 클릭했습니다.');
    };

    return (
        <>
            <S.Title>
                내 주변 <span style={{ color: '#747bff' }}>추천 업체들</span>
            </S.Title>
            <S.CardContainer
                ref={scrollRef}
                onMouseDown={mouseDownHandler}
                onMouseMove={mouseMoveHandler}
                onMouseUp={mouseUpHandler}
                onMouseLeave={mouseUpHandler}
            >
                <Link to="https://www.naver.com">
                    <ShopCard onClick={clickHandler} />
                </Link>
                <Link to="https://www.naver.com">
                    <ShopCard onClick={clickHandler} />
                </Link>
                <Link to="https://www.naver.com">
                    <ShopCard onClick={clickHandler} />
                </Link>
                <Link to="https://www.naver.com">
                    <ShopCard onClick={clickHandler} />
                </Link>
                <Link to="https://www.naver.com">
                    <ShopCard onClick={clickHandler} />
                </Link>
                <Link to="https://www.naver.com">
                    <ShopCard onClick={clickHandler} />
                </Link>

            </S.CardContainer>
        </>
    );
};

export default MainHeader;
