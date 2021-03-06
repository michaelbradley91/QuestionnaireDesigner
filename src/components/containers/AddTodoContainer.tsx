import { connect, Dispatch } from "react-redux"
import { addTodo } from "../../actions"
import { AppState } from "../../reducer"
import { AddTodo } from "../presenters/AddTodo"

type AddTodoDispatchProps = {
    addTodo: (text: string) => any
}

const mapDispatch = (dispatch: Dispatch<AppState>): AddTodoDispatchProps => ({
    addTodo: (text: string) => dispatch(addTodo(text))
})

export const AddTodoContainer = connect(null, mapDispatch)(AddTodo)
