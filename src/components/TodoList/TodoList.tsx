import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import { Task } from "./types";
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

const getSavedTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
}

function TodoList() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [tasks, setTasks] = useState<Task[]>([])
    const [isEditingId, setIsEditingId] = useState<number | null>(null);
    const [editingText, setEditingText] = useState("");

    const saveTasksToLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    useEffect(() => {
        const savedTasks = getSavedTasks();
        if(savedTasks.length) {
            setTasks(savedTasks);
        }
    }, []);

    const handleClickAddTask = () => {
        if(inputRef.current && inputRef.current.value.trim()) {
            const task = {
                id: Date.now(),
                text: inputRef.current.value.trim(),
                completed: false,
                isEditing: false,
            }
            setTasks(prev => [...prev, task]);
            inputRef.current!.value = "";
        }
    };

    const handleClickDeleteAll = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    };

    const handleDeleteTask = (id: number) => {
        setTasks(prev => prev.filter(task => task.id !==id));
    };

    const handleToggleCompleted = (id: number) => {
        setTasks(prev => prev.map(task => 
            task.id === id ? {...task, completed: !task.completed } : task
        ));
    }

    // const handleToggleEdit = (id: number) => {
    //     setTasks(prev => prev.map(task => 
    //         task.id === id ? {...task, isEditing: !task.isEditing} : task
    //     ))
    // }

    // const handleEditTaskText = (id: number, newText: string) => {
    //     setTasks(prev => prev.map(task =>
    //         task.id === id ? {...task, text: newText, isEditing: false} : task
    //     ))        
    // }

    const handleStartEditing = (id: number, text: string) => {
        setIsEditingId(id);
        setEditingText(text);
    };

    const handleSaveTask = (id: number) => {
        setTasks(prev => prev.map(task =>
            task.id === id ? { ...task, text: editingText } : task
        ));
        setIsEditingId(null);
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
                        {tasks.map((task) => (
                            <ListItem key={task.id}>
                                {isEditingId === task.id ? (
                                    <input 
                                        type="text" 
                                        value={editingText} 
                                        onChange={(e) => setEditingText(e.target.value)} 
                                        autoFocus
                                    />
                                ) : (
                                    <ListItemText isStrikeThrough={task.completed}>
                                        {task.text}
                                    </ListItemText>
                                )}
                                <SmallTaskButtonDiv>
                                    {/* Виконати (неактивна під час редагування) */}
                                    <SmallTaskButton 
                                        mainColor="lightgreen" 
                                        onClick={() => handleToggleCompleted(task.id)}
                                        isActive={isEditingId !== task.id}
                                    >
                                        ✔
                                    </SmallTaskButton>
    
                                    {/* Редагувати або Зберегти */}
                                    {isEditingId === task.id ? (
                                        <SmallTaskButton 
                                            mainColor="lightblue"
                                            onClick={() => handleSaveTask(task.id)}
                                        >
                                            💾
                                        </SmallTaskButton>
                                    ) : (
                                        <SmallTaskButton 
                                            mainColor="lightyellow"
                                            onClick={() => handleStartEditing(task.id, task.text)}
                                        >
                                            🖊️
                                        </SmallTaskButton>
                                    )}
    
                                    {/* Видалити (неактивна під час редагування) */}
                                    <SmallTaskButton 
                                        mainColor="lightsalmon" 
                                        onClick={() => handleDeleteTask(task.id)}
                                        isActive={isEditingId !== task.id}
                                    >
                                        ❌
                                    </SmallTaskButton>
                                </SmallTaskButtonDiv>
                            </ListItem>
                        ))}
                    </List>
                </ListContainer>
                <BottomBtnsContainer>
                    <Button name="Delete all" onClick={handleClickDeleteAll} />
                    <Button name="Save all" onClick={saveTasksToLocalStorage}/>
                </BottomBtnsContainer>
            </TodoListWrapper>
        </TodoListApp>
    );
    
}

export default TodoList;
