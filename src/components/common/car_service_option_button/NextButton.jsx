import React from 'react';
import styled from 'styled-components'

/**
 * 옵션을 넘길때 버튼이며 value값이 버튼의이름으로 사용됨 onClick 속성을 해당 버튼을 눌럿을때 작동할 함수를 전달하면됩니다.
 */
const NextButton = ({ value, onClick }) => {
    return (
        <Button onClick={onClick}>
            {value}
        </Button>
    );
};

export default NextButton;

const Button = styled.button`
    box-sizing: border-box;
    width: 100%;
    margin: 10px;
    padding: 10px 10px;
`