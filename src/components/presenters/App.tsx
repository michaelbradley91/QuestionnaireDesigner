import * as React from "react";
import { TodosListContainer } from "../containers/TodosListContainer";
import { AddTodoContainer } from "../containers/AddTodoContainer";

export const App = () => (
    <div>
        <h1>Todos App</h1>
        <AddTodoContainer />
        <TodosListContainer />
    </div>
)
