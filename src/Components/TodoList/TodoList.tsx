import { useState } from "react";
import TodoListItem from "./TodoListItem"
import './TodoList.css'

interface Props {
    todos: Todo[];
    ToggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, ToggleTodo}) => {
    return (
        <ul className="TodoList text-white">
            {todos.map((todo) => (
                <TodoListItem key={todo.text} todo={todo} ToggleTodo={ToggleTodo} />
            ))}
        </ul>
    )
}