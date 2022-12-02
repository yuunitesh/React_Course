import Todo from "../models/todo"
import classes from "./SingleTodo.module.css"

type Props = {
    todo: string;
    onClick: () => void
}

const SingleTodo = (props : Props) => {
    return <li className={classes.item} onClick={props.onClick}>{props.todo}</li>
}

export default SingleTodo