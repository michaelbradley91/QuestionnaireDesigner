import * as React from "react";

type TodoProps = {
    onClick: () => any,
    completed: boolean,
    text: string
}

const Todo = (props: TodoProps) => (
  <li
    onClick={props.onClick}
    style={{textDecoration: props.completed ? 'line-through' : 'none'}}
  >
    {props.text}
  </li>
)

export default Todo