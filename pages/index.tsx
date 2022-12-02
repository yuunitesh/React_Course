import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import TodosContextProvider from "../store/todos-context";


export default function Home() {
    

return (
    <TodosContextProvider>
<div>
    <NewTodo />
    <TodoList />
    </div>
</TodosContextProvider>
)
}
