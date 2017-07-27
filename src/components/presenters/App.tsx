import * as React from "react"
import { AddTodoContainer } from "../containers/AddTodoContainer"
import { TodosListContainer } from "../containers/TodosListContainer"

export const App = () => (
    <div>
        <h1>Todos App</h1>
        <AddTodoContainer />
        <TodosListContainer />
    </div>
)
