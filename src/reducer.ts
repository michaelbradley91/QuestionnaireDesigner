import { Action, ActionType } from "./actions";
import { combineReducers } from 'redux'

export type TodoState = {
    text: string,
    completed: boolean
};

export type AppState = {
    todos: TodoState[]
}

export const initialState: AppState = {
    todos: []
}

const todosReducer = (state: TodoState[] = initialState.todos, action: Action): TodoState[] => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [...state, {
                text: action.params,
                completed: false
            }]
        default:
            return state
    }
}

const reducer = (state: AppState = initialState, action: Action): AppState => {
    return <AppState> combineReducers({
        todos: todosReducer
    })(state, action)
}

export default reducer;