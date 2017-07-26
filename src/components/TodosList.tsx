import * as React from 'react'
import Todo from './Todo'
import { TodoType } from "../reducer";

type TodosListProps = {
    todos: TodoType[],
    onClick: (index: number) => any
}

const TodoList = (props: TodosListProps) => (
  <ul>
    {props.todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => props.onClick(index)} />
    ))}
  </ul>
)

export default TodoList