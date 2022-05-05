interface Todo {
    text: string;
    complete: boolean
}

type ToggleTodo = (SelectedTodo: Todo) => void;

type AddTodo = (text: string) => void;