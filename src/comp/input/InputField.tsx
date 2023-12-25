import React, { useState } from 'react'
import { Flex, Input, Button } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import { Todo } from '../model/model';
import { addTask } from '../store/TodoList';
import { useAppDispatch } from '../store/store';

type InputProps = {
    todo: string
    setTaskInput: React.Dispatch<React.SetStateAction<string>>
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const InputField = ({ todo, setTaskInput, todos, setTodos }: InputProps) => {

    const [loading, setLoading] = useState(false);
    const  dispatch = useAppDispatch();

    // const addTask = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     let task = todo;
    //     const tas = {
    //         id: Date.now(),
    //         todo: task,
    //         isdone: false
    //     }

    //     if (todo) {

    //         setTodos([...todos, tas]);

    //         setTaskInput(""); // Clear the todo value here
    //     }

    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1000);
    // }

    
    
    return (

            <>
            <Input size="large" placeholder="Add Task " value={todo} prefix={<PlusOutlined />} onChange={(e) => setTaskInput(e.target.value)} />
            <Button
                size='large'
                type="primary"
                icon={<PlusOutlined />}
                loading={loading}
                onClick={() => {dispatch(addTask({todo : todo}));setTaskInput("")}}
            />
            </>
    )
}

export default InputField