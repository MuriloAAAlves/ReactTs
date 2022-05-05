import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import './TodoList.css'

const InitialTodos: Todo[] = [

];

function ListContainer(){
    const [todos, setTodos] = useState(InitialTodos);

    const ToggleTodo = (SelectedTodo: Todo) => {
        const NewTodos = todos.map((todo) => {
            if (todo === SelectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(NewTodos);
    };

    const addTodo: AddTodo = (text: string) => {
        const newTodo = { text, complete: false};
        setTodos([...todos,newTodo])
    }

    return (
        <div className='ListContainer mt-5'>  
            <h3 className='text-white mt-5'>To do List:</h3>
            <AddTodoForm addTodo={addTodo}/>
            <TodoList todos={todos} ToggleTodo={ToggleTodo} />
        </div>
    )
}

export default ListContainer;