import styled from 'styled-components'
import { color } from '../../../util/globalstyle'

export const ModalContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: ${color["modal-background"]};
`

export const Modalbox = styled.div`
display: flex;
position: absolute;
top: 20%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 300px;
width: 100%;
height: 100px;
border-radius: 5px;
background-color: ${color["modal"]};
justify-content: center;
align-items: center;
font-weight: bold;
`

