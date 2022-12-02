import React, { useContext } from "react"
import Todo from "../models/todo"
import { TodosContext } from "../store/todos-context"
import SingleTodo from "./SingleTodo"
import classes from "./TodoList.module.css"

type Props = {}

const TodoList = (props: Props) => {
  const todosCtx = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
        {todosCtx.items.map((item: Todo) => {
            return <SingleTodo onClick={todosCtx.removeTodo.bind(null, item.id)} key={item.id} todo={item.text} />
        })}
    </ul>
  )
}

export default TodoList