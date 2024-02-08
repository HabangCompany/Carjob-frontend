import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';


const DaumPostCode = ({ storeAddressHandler }) => {
    const [address, setAddress] = useState('')
    const [zoneCode, setZoneCode] = useState('')

    //지도정보 받아오기
    const completeHandler = (data) => {
        console.log(data)
        setAddress(data.address)
        setZoneCode(data.zonecode)
        storeAddressHandler(data.address, data.jibunAddress, data.zonecode)
    }
    //지도정보 인풋창에 넣기


    return (
        <div>
            <DaumPostcode onComplete={completeHandler} onClose={() => { console.log("주소끔") }} />
        </div>
    );
};

export default DaumPostCode;