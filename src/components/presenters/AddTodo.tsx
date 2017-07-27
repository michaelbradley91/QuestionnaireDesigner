import * as React from "react";

type AddTodoProps = {
    addTodo: (text: string) => any
}

export const AddTodo = (props: AddTodoProps) => {
    let input: any

    return (<div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          props.addTodo(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>)
}
