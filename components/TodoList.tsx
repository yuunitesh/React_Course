import React from "react"
import Todo from "../models/todo"
import SingleTodo from "./SingleTodo"
import classes from "./TodoList.module.css"

type Props = {items: Todo[]}

const TodoList = (props: Props) => {
  return (
    <ul className={classes.todos}>
        {props.items.map((item: Todo) => {
            return <SingleTodo key={item.id} todo={item.text} />
        })}
    </ul>
  )
}

export default TodoList