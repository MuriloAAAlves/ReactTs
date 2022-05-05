import React from 'react'
import './TodoList.css'

interface Todo{
    text:string;
    complete: boolean;
}
interface Props{
    todo: Todo;
    ToggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, ToggleTodo }) => {
    return(
        <div className='ListItem'>
            <li>
                <label
                    style={{ textDecoration: todo.complete ? 'line-through' : undefined}}
                >
                    <input 
                    type="checkbox"
                    className='ListCheckbox'
                    checked={todo.complete}
                    onClick={() => {
                        ToggleTodo(todo);
                    }}
                    /> {' '}
                    { todo.text}
                </label>
            </li>
        </div>
    )
}

export default TodoListItem