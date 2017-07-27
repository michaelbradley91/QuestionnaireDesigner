import * as React from "react"

type AddTodoProps = {
    addTodo: (text: string) => any
}

export const AddTodo = (props: AddTodoProps) => {
    let input: any

    const onSubmit = (e: any) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      props.addTodo(input.value)
      input.value = ""
    }

    return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={(node) => { input = node }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>)
}
