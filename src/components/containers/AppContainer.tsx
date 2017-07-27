import { connect } from "react-redux"
import { Dispatch } from "redux"
import { addTodo } from "../../actions"
import { AppState, TodoState } from "../../reducer"
import { App } from "../presenters/App"

type AppStateProps = {
    todos: TodoState[]
}

type AppDispatchProps = {
    addTodo: (text: string) => any
}

type AppProps = AppStateProps & AppDispatchProps

const mapState = (state: AppState): AppStateProps => ({ todos: state.todos })
const mapDispatch = (dispatch: Dispatch<AppState>) => ({
    addTodo: (text: string) => dispatch(addTodo(text))
})

export const AppContainer = connect(mapState, mapDispatch)(App)
