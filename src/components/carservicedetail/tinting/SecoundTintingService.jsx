import React from 'react';
import NextButton from '../../common/car_service_option_button/NextButton';

const SecoundTintingService = () => {
    return (
        <div>
            차종을 입력해주세요
            <input type='text' id='carname'></input>
            <label htmlFor="carname"></label>
            <NextButton value={"다음"} />
        </div>
    );
};

export default SecoundTintingService;