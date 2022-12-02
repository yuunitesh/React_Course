import React from "react"
import Todo from "../models/todo"

type Props = {items: Todo[]}

const TodoList = (props: Props) => {
  return (
    <ul>
        {props.items.map((item: Todo) => {
            return <li key={item.id}>{item.text}</li>
        })}
    </ul>
  )
}

export default TodoList