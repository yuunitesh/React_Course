import TodoList from "../components/TodoList";
import Todo from "../models/todo";

export default function Home() {
    const todoItems = [
        new Todo("Learn React"),
        new Todo("Learn Typescript")
    ]

return (
<div>
    <TodoList items={todoItems}
/></div>
)
}
