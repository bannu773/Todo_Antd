import { Flex, Typography } from 'antd'
import React, { useState } from 'react'
import { ProfileTwoTone, DeleteTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { Todo } from '../model/model';
import './liststyle.scss'


type TodoProps = {
    todo: Todo,
    index: number
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const { Paragraph } = Typography;

const ListItem = ({ todos, todo, index, setTodos }: TodoProps) => {
    const [task, setTask] = useState(todo.todo);

    const DeleteTask = (id: number) => {
        setTodos(todos.filter((task) => task.id !== id))
    }

    const Donetask = (id: number) => {
        const updatedTodos = todos.map((task) =>
            task.id === id ? { ...task, isdone: !todo.isdone } : task
        );
        setTodos(updatedTodos);
    }

    return (
        <div className='list_item'>

            <div className='list_cont'>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Flex align='center' gap={"10px"}>
                        <ProfileTwoTone style={{ fontSize: '30px', marginLeft: "15px" }} />
                        <div className='index' style={{ fontSize: "30px" }}>{index + 1}</div>
                    </Flex>
                </div>
                {
                    todo.isdone ? <div style={{ margin: "auto", display: "flex" }} >
                        <Paragraph delete disabled style={{ fontSize: "25px", position: "relative", translate: "0px 12px" }} editable={{ onChange: setTask }}>{task}</Paragraph>
                    </div> : <div style={{ margin: "auto", display: "flex" }} >
                        <Paragraph style={{ fontSize: "25px", position: "relative", translate: "0px 12px" }} editable={{ onChange: setTask }}>{task}</Paragraph>
                    </div>
                }
                <div>
                    <Flex gap={"20px"} style={{ marginRight: "20px" }}>
                        <DeleteTwoTone style={{ fontSize: '30px' }} onClick={() => {
                            DeleteTask(todo.id)
                        }} />
                        <CheckCircleTwoTone style={{ fontSize: '30px' }} onClick={() => {
                            Donetask(todo.id)
                        }} />
                    </Flex>
                </div>
            </div>

        </div>
    )
}

export default ListItem