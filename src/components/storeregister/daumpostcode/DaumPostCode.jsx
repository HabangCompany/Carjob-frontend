import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';


const DaumPostCode = () => {
    const [address, setAddress] = useState('')
    const [zoneCode, setZoneCode] = useState('')

    //지도정보 받아오기
    const completeHandler = (data) => {
        console.log(data)
        setAddress(data.address)
        setZoneCode(data.zonecode)
    }

    console.log(address)
    console.log(zoneCode)
    return (
        <div>
            <DaumPostcode onComplete={completeHandler} />
        </div>
    );
};

export default DaumPostCode;