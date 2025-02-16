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
justify-content: space-between;
gap: 20px;
width: 100%;
height: 300px;
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


export const ListItem = styled.li`
list-style: none;
list-style-position: outside;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 10px;
margin-left: -20px;
padding: 10px;
font-size: 24px;
border: 1px solid white;
border-bottom-color: rgba(0,0,0,0.1);
`

export const SmallTaskButtonDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 8px;
`

export const SmallTaskButton = styled.button`
`