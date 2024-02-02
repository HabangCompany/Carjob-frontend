import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
max-width: 400px;
`

export const Field = styled.div`
button{
    width: 100%;
}
margin-top: 10px;
`
export const Title = styled.div`
text-align: left;
margin-left: 1rem;
font-size: 1.2rem;
font-weight : 700;
`

export const Input = styled.input`
width:100%;
max-width: 400px;
height: 35px;

margin-top: 10px;
&:focus{
    border: 5px solid #9898ff;
}
`