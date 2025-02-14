import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import { 
    TodoListWrapper,
    TodoListApp,
    InputBtnContainer,
    ListContainer,
    BottomBtnsContainer,
 } from "./styles";

function TodoList() {
    return(
        <TodoListApp>
            <TodoListWrapper>
                <InputBtnContainer>
                    <Input name='input' placeholder="Enter your task"/>
                    <Button />
                </InputBtnContainer>
                <ListContainer>
                    <List />
                </ListContainer>
                <BottomBtnsContainer>
                    <Button />
                    <Button />
                </BottomBtnsContainer>
            </TodoListWrapper>
        </TodoListApp>
    );
}

export default TodoList;