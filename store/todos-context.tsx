import { createContext, useState } from "react";
import Todo from "../models/todo";

type Props = {
    children: React.ReactNode
}

type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

export const TodosContext = createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo:(id: string) => {}
})

const TodosContextProvider = (props: Props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string) : void => {
        const newTodo = new Todo(todoText);

        setTodos((prevState) => [...prevState, newTodo])
    }

    const todoRemoveHandler = (todoId: string) => {
        setTodos((prevState) => {
            return prevState.filter(todo => todo.id !== todoId)
        })

    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: todoRemoveHandler
    }
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
    
}

export default TodosContextProvider