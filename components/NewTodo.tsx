import { FormEvent, useContext, useRef } from "react"
import { TodosContext } from "../store/todos-context"
import classes from "./NewTodo.module.css"

type Props = {}

const NewTodo = (props: Props) => {
    const todosCtx = useContext(TodosContext)

    const inputText = useRef<HTMLInputElement>(null)

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        const enteredText = inputText.current!.value

        if(enteredText.trim().length === 0) {
            return
        }

        todosCtx.addTodo(enteredText)
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="textInput">Todo Text</label>
        <input ref={inputText} type="text" id="textInput"/>
        <button type="submit">Add Todo</button>
    </form>
}

export default NewTodo