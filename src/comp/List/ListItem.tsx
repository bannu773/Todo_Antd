import { Flex, Form, Input, Typography } from 'antd'
import React, { useState } from 'react'
import { ProfileTwoTone, DeleteTwoTone, CheckCircleTwoTone, EditTwoTone } from '@ant-design/icons';
import { Todo } from '../model/model';
import './liststyle.scss'
import { useAppDispatch, useAppSelector } from '../store/store';
import { deleteTask, doneTask,editTask } from '../store/TodoList';


type TodoProps = {
    todo: Todo,
    index: number
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const { Paragraph } = Typography;

const ListItem = ({ todos, todo, index, setTodos }: TodoProps) => {
    const [task, setTask] = useState(todo.todo);
    const [edit, setEdit] = useState(false);


    const dispatch = useAppDispatch();
    return (
        <div className='list_item'>

            <div className='list_cont'>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Flex align='center' gap={"10px"}>
                        <ProfileTwoTone style={{ fontSize: '30px', marginLeft: "15px" }} />
                        <div className='index' style={{ fontSize: "30px" }}>{index + 1}</div>
                    </Flex>

                </div>
               
                {edit ? <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={() => {
                        dispatch(editTask({ id: todo.id, todotask: task }));
                        setEdit(false);
                    }}
                >
                    <Input value={task} onChange={(e) => {
                        setTask(e.target.value);
                    }} />
                </Form>
                    :
                    <div>
                        {
                            todo.isdone ? <h1 style={{ fontSize: "25px" , textDecoration: "line-through" , color : "gray",opacity:"0.4"}} >{task}</h1> : <h1 style={{ fontSize: "25px"}}>{task}</h1>
                        }
                    </div>
                }
                <div>
                    <Flex gap={"20px"} style={{ marginRight: "20px" }}>
                        <EditTwoTone style={{ fontSize: '30px' }} onClick={() => { setEdit(!edit) }} />
                        <DeleteTwoTone style={{ fontSize: '30px' }} onClick={() => {
                            dispatch(deleteTask({ id: todo.id }))
                        }} />
                        <CheckCircleTwoTone style={{ fontSize: '30px' }} onClick={() => {
                            dispatch(doneTask({ todol: todo }))
                        }} />
                    </Flex>
                </div>
            </div>

        </div>
    )
}

export default ListItem