import React from 'react'
import { Todo } from '../model/model';
import ListItem from '../List/ListItem';


type todoProps = {
    todos: Todo[]
    
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoList = ({todos,setTodos } : todoProps) => {
    return (
        <div className='todo' style={{display : "flex" , gap : "10px" ,flexDirection : "column" ,marginTop : "20px"}}>
            {todos.map(((name ,index) => {
                return (
                    <ListItem todos={todos} todo={name} index = {index} setTodos = {setTodos} />
                )
            }))}
        </div>
    )
}

export default TodoList