import styled from '@emotion/styled';

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
padding: 6px;
min-width: 400px;
/* outline: none; */
`

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 4px;
width: 100%;
`

export const InputElement = styled.input`
padding: 10px;
outline: none;
border: none;
border-radius: 20px;
box-shadow: 0 4px 12px rgba(130, 76, 161, 0.4);
font-size: 16px;

&::placeholder {
    color: #333;
    opacity: 0.4;
    padding-left: 12px;
}
`
