import React, { useState } from 'react';
import styled from 'styled-components';
import FirstTintingService from './FirstTintingService'
import SecoundTintingService from './SecoundTintingService';
import ThirdTintingService from './ThirdTintingService';


/** 
 * 1. 시공부위
 * 2. 차종
 * 3. 지역
 * 
 */


const Tinting = () => {
    const [step, setStep] = useState(1)


    return (
        <div>
            {step == 1 ? <FirstTintingService nextstep={setStep} /> : null}
            {step == 2 ? <SecoundTintingService nextstep={setStep} /> : null}
            {step == 3 ? <ThirdTintingService /> : null}


        </div>
    );
};



export default Tinting;
