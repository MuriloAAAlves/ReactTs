import React, { useState } from 'react';
import './TodoList.css'

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
            className='ListInput'
            type="text" 
            value={text}
            onChange={(e) => {
                setText(e.target.value);
            }}
            />
            <button 
            type="submit"
            className='btn btn-secondary rounded-pill'
            onClick={(e) => {
                if (text != ''){
                addTodo(text);
                setText('');
            }    
            }}
            >
                 Add Task
            </button>
        </form>
    )
}