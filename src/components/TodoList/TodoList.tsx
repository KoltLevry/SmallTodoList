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
                    <Button name={"Add"}/>
                </InputBtnContainer>
                <ListContainer>
                    <List />
                </ListContainer>
                <BottomBtnsContainer>
                    <Button name={"Delete all"}/>
                    <Button name={"Save all"}/>
                </BottomBtnsContainer>
            </TodoListWrapper>
        </TodoListApp>
    );
}

export default TodoList;