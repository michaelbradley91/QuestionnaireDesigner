import * as React from "react"
import { TodoState } from "../../reducer"
import { Todo } from "./Todo"

type TodosListProps = {
    todos: TodoState[]
}

export const TodosList = (props: TodosListProps) => (
    <ul>
        {props.todos.map((todo, index) => 
            <Todo key={index} {...todo}/>
        )}
    </ul>
)
