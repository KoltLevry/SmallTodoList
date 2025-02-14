import styled from '@emotion/styled';

export const TodoListApp = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`

export const TodoListWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
gap: 20px;
padding: 40px;
width: clamp(450px, 50%, 600px);
min-height: 500px;
height: auto;
max-height: 600px;
border-radius: 20px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`

export const InputBtnContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
gap: 20px;
width: 100%;
height: 45px;
/* box-shadow: 0 4px 12px rgba(156, 41, 41, 0.4); */
`

export const ListContainer = styled.div`
display: flex;
/* flex-direction: column; */
justify-content: space-between;
/* align-items: center; */
gap: 20px;
width: 100%;
min-height: 270px;
max-height: 300px;
border-radius: 20px;
box-shadow: 0 4px 12px rgba(225, 225, 225, 0.4);
`

export const BottomBtnsContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
gap: 20px;
width: 100%;
height: 45px;
border-radius: 20px;
`