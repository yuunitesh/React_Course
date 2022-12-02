import { FormEvent, useRef } from "react"

type Props = {
    onAddTodo: (text: string) => void
}

const NewTodo = (props: Props) => {
    const inputText = useRef<HTMLInputElement>(null)

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        const enteredText = inputText.current!.value

        if(enteredText.trim().length === 0) {
            return
        }

        props.onAddTodo(enteredText)
    }

    return <form onSubmit={submitHandler}>
        <label htmlFor="textInput">Todo Text</label>
        <input ref={inputText} type="text" id="textInput"/>
        <button type="submit">Add Todo</button>
    </form>
}

export default NewTodo