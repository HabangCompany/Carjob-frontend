import React from 'react';
import NextButton from '../../common/car_service_option_button/NextButton';
/** 차종을 입력하는 컴포넌트 */
const SecoundTintingService = () => {
    return (
        <div>
            <div>차종을 입력 해주세요</div>
            <input type='text' id='carname'></input>
            <label htmlFor="carname"></label>
            <NextButton value={"다음"} />
        </div>
    );
};

export default SecoundTintingService;