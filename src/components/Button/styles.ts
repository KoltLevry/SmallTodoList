import styled from '@emotion/styled';

interface MainButtonStyleProps {
disabled: boolean;
}

export const MainButton = styled.button<MainButtonStyleProps>`
width: 100%;
padding: 20px;
border: none;
box-shadow: 0 4px 12px rgba(41, 104, 156, 0.4);
border-radius: 20px;
cursor: pointer;
font-size: 18px;
letter-spacing: 1.5px;
text-shadow: 0 2px 4px rgba(41, 104, 156, 0.4);
`