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
} from "./styles";

function TodoList() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [listItems, setListItems] = useState<string[]>([]);

    const handleClickAddTask = () => {
        // if (inputRef.current && inputRef.current.value.trim()) {
            // setListItems((prev) => [...prev, inputRef.current!.value]);
            // inputRef.current.value = ""; 
        // }
        if(inputRef.current) {
            console.log(inputRef.current.value);
            setListItems((prev) => [...prev, inputRef.current!.value]);
            console.log(listItems);
            inputRef.current.value = "";
        }
    };

    return (
        <TodoListApp>
            <TodoListWrapper>
                <InputBtnContainer>
                    <Input name="input" placeholder="Enter your task" ref={inputRef} />
                    <Button name="Add" onClick={handleClickAddTask} />
                </InputBtnContainer>
                <ListContainer>
                    <List>
                        {/* {listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))} */}
                        <li>Hi</li>
                        <h1>Hi 2</h1>
                        <h1>Hi</h1>
                        <h1>Hi 2</h1>
                        <h1>Hi</h1>
                        <h1>Hi 2</h1>
                        <h1>Hi</h1>
                        <h1>Hi 2</h1>
                    </List>
                </ListContainer>
                <BottomBtnsContainer>
                    <Button name="Delete all" onClick={() => {}} />
                    <Button name="Save all" />
                </BottomBtnsContainer>
            </TodoListWrapper>
        </TodoListApp>
    );
}

export default TodoList;
