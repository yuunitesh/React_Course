import { useState } from "react";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import Todo from "../models/todo";


export default function Home() {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string) : void => {
        const newTodo = new Todo(todoText);

        setTodos((prevState) => prevState.concat(newTodo))
    }

return (
<div>
    <NewTodo onAddTodo={addTodoHandler}/>
    <TodoList items={todos}
/></div>
)
}
