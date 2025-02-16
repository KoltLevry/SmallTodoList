import { useRef, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import { 
    TodoListWrapper,
    TodoListApp,
    InputBtnContainer,
    ListContainer,
    BottomBtnsContainer,
    ListItem,
    SmallTaskButtonDiv,
    SmallTaskButton,
} from "./styles";

function TodoList() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [listItems, setListItems] = useState<string[]>([]);

    const handleClickAddTask = () => {
        if(inputRef.current && inputRef.current.value.trim()) {
            const task = inputRef.current!.value.trim();
            setListItems((prev) => [...prev, task]);
            inputRef.current!.value = "";
        }
    };

    const handleClickDeleteAll = () => {
        setListItems([]);
    }

    const fruits = ['app', 'sw', "red"];
    console.log(fruits);
    const findRight = fruits.splice(1,1);
    console.log(findRight);
    console.log(fruits);

    const handleDeleteTask = (index: number) => {
        setListItems(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <TodoListApp>
            <TodoListWrapper>
                <InputBtnContainer>
                    <Input name="input" placeholder="Enter your task" ref={inputRef} />
                    <Button name="Add" onClick={handleClickAddTask} />
                </InputBtnContainer>
                <ListContainer>
                    <List>
                        {
                            listItems.map( (item, index) => (
                                <ListItem key={Math.random()}>
                                    {item}
                                    <SmallTaskButtonDiv>
                                        <SmallTaskButton onClick={() => {}}>✔</SmallTaskButton>
                                        <SmallTaskButton onClick={() => {}}>🖊️</SmallTaskButton>
                                        <SmallTaskButton onClick={handleDeleteTask}>❌</SmallTaskButton>
                                    </SmallTaskButtonDiv>
                                </ListItem>
                            ))
                        }
                    </List>
                </ListContainer>
                <BottomBtnsContainer>
                    <Button name="Delete all" onClick={handleClickDeleteAll} />
                    <Button name="Save all" />
                </BottomBtnsContainer>
            </TodoListWrapper>
        </TodoListApp>
    );
}

export default TodoList;
