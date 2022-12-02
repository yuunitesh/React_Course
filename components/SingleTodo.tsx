import Todo from "../models/todo"

type Props = {
    todo: string
}

const SingleTodo = (props : Props) => {
    return <li>{props.todo}</li>
}

export default SingleTodo