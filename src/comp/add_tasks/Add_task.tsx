import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import InputField from '../input/InputField';
import { Flex,Button } from 'antd';
import { Todo } from '../model/model';
import TodoList from '../TodoList/TodoList';




const Add_task = () => {
    const [taskInput, setTaskInput] = useState<string>('');
    
    const [todos,setTodos] = useState<Todo[]>([]);

    return (
        <div className='' style={{display:"flex",justifyContent : "center",flexDirection : "column" , margin : "auto" ,width : "100%",alignItems : "center"}}>
            <div style={{maxWidth : "700px",width : "700px"}} >
                <Flex >
                    <InputField todo={taskInput} setTaskInput={setTaskInput} todos={todos} setTodos={setTodos} />
                </Flex>
                <TodoList todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    )
}

export default Add_task