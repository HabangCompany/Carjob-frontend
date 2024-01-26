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
    const [first, setFirst] = useState()


    return (
        <div>
            <FirstTintingService />
            <SecoundTintingService />
            <ThirdTintingService />
        </div>
    );
};



export default Tinting;
