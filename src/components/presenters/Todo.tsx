import * as React from "react"
import { TodoState } from "../../reducer"

type TodoProps = {
    text: string,
    completed: boolean
}

export const Todo = (props: TodoProps) => (
    <li
        style={{textDecoration: props.completed ? "line-through" : "none"}}
    >
    {props.text}
    </li>
)
