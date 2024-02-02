import styled from 'styled-components'
import { color } from '../../../util/globalstyle'


export const TagBox = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 10px;
`
export const Tags = styled.div`

    padding: 5px 10px;
    border-radius: 10px;
    background-color:${({ selected }) => (selected ? "#c7b2ff" : "#ffe")};
    color : ${({ selected }) => (selected ? 'white' : "black")};
    cursor: pointer;
`