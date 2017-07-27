import { TodoState } from "../../reducer"
import * as React from "react"

type TodoProps = {
    text: string,
    completed: boolean
}

export const Todo = (props: TodoProps) => (
    <li
        style={{textDecoration: props.completed ? 'line-through' : 'none'}}
    >
    {props.text}
    </li>
)
