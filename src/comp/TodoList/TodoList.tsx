import React from 'react'
import { Todo } from '../model/model';
import ListItem from '../List/ListItem';
import { useAppSelector } from '../store/store';


type todoProps = {
    todos: Todo[]
    
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoList = ({todos,setTodos } : todoProps) => {
    const tasks = useAppSelector(state=>state.todos.tasks)
    return (
        <div className='todo' style={{display : "flex" , gap : "10px" ,flexDirection : "column" ,marginTop : "20px"}}>
            {tasks.map(((name ,index) => {
                return (
                    <ListItem todos={todos} todo={name} index = {index} setTodos = {setTodos} />
                )
            }))}
        </div>
    )
}

export default TodoList