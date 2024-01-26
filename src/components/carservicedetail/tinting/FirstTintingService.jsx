import React from 'react';
import styled from 'styled-components';
import NextButton from '../../common/car_service_option_button/NextButton'

/** 시공부위를 선택하는 컴포넌트 */
const TintingService = () => {
    return (
        <Container>
            <div>
                시공부위를 선택해주세요
            </div>
            <Divflex>
                <CheckBox type='checkbox' id='전체썬팅' value={"전체썬팅"} />
                <label htmlFor='전체썬팅'>전체 썬팅</label>
            </Divflex>
            <Divflex>
                <CheckBox type='checkbox' id='전면썬팅' value={"전면썬팅"} />
                <label htmlFor='전면썬팅'>전면 썬팅</label>
            </Divflex>
            <Divflex>
                <CheckBox type='checkbox' id='측후면썬팅' value={"측후면썬팅"} />
                <label htmlFor='측후면썬팅'>측후면 썬팅</label>
            </Divflex>
            <Divflex>
                <CheckBox type='checkbox' id='후면썬팅' value={"후면썬팅"} />
                <label htmlFor='후면썬팅'>후면 썬팅</label>
            </Divflex>

            <NextButton value={"다음"} />
        </Container>
    );
};

export default TintingService;

const Container = styled.section`
    width: 100%;
    box-sizing: border-box;

`

const Divflex = styled.div`
    padding: 5px 10px;
    display: flex;
    align-items: center;
    background-color: #eaeaea;
    margin-top: 10px;
    label{
        margin-left: 1rem;
    }
`

const CheckBox = styled.input`
    height: 25px;
    width: 25px;
`