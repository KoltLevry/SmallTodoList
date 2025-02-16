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
    ListItemText,
} from "./styles";

function TodoList() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [listItems, setListItems] = useState<string[]>([]);
    const [completedTasks, setCompletedTasks] = useState<boolean[]>([]);
    const [isActive, setisActive] = useState<boolean>(true);

    const [isActiveDoneBtn, setIsActiveDoneBtn] = useState<boolean>(true);
    const [isActiveEditBtn, setIsActiveEditBtn] = useState<boolean>(true);
    const [isActiveDelBtn, setIsActiveDelBtn] = useState<boolean>(true);

    const handleClickAddTask = () => {
        if(inputRef.current && inputRef.current.value.trim()) {
            const task = inputRef.current!.value.trim();
            setListItems((prev) => [...prev, task]);
            setCompletedTasks( (prev) => [...prev, false]);
            inputRef.current!.value = "";
        }
    };

    const handleClickDeleteAll = () => {
        setListItems([]);
        setCompletedTasks([]);
    }

    const handleDeleteTask = (index: number) => {
        setListItems(prev => prev.filter((_,i) => i !== index));
        setCompletedTasks(prev => prev.filter((_,i) => i !== index));
    }

    const handleSetCompletedTask = (index: number) => {
        setCompletedTasks(prev => {
            const newCompletedTasks = [...prev];
            newCompletedTasks[index] = !newCompletedTasks[index];
            return newCompletedTasks;
        });
    }

    const handleEditText = (index: number) => {
        setIsActiveDoneBtn(prev => !prev);
        // setIsActiveEditBtn(prev => !prev);
        setIsActiveDelBtn(prev => !prev);
        
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
                                    <ListItemText isStrikeThrough={completedTasks[index]}>{item}</ListItemText>
                                    <SmallTaskButtonDiv>
                                        <SmallTaskButton 
                                            mainColor="lightgreen" 
                                            onClick={() => handleSetCompletedTask(index)}
                                            isActive={isActiveDoneBtn}
                                        >✔</SmallTaskButton>
                                        <SmallTaskButton 
                                            mainColor='lightyellow' 
                                            onClick={() => {handleEditText(index)}}
                                            isActive={isActiveEditBtn}
                                        >🖊️</SmallTaskButton>
                                        <SmallTaskButton 
                                            mainColor="lightsalmon" 
                                            onClick={()=>(handleDeleteTask(index))}
                                            isActive={isActiveDelBtn}                                            
                                            >❌</SmallTaskButton>
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
