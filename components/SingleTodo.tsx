import Todo from "../models/todo"
import classes from "./SingleTodo.module.css"
type Props = {
    todo: string
}

const SingleTodo = (props : Props) => {
    return <li className={classes.item}>{props.todo}</li>
}

export default SingleTodo