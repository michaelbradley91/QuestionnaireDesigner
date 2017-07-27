import { TodoState, AppState } from "../../reducer";
import { connect } from 'react-redux';
import { TodosList } from "../presenters/TodosList";

type TodosListStateProps = {
    todos: TodoState[]
}

const mapState = (state: AppState): TodosListStateProps => ({ todos: state.todos })

export const TodosListContainer = connect(mapState, null)(TodosList)
