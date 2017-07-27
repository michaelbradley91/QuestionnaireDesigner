import { combineReducers } from "redux"
import { Action, ActionType } from "./actions"

export type TodoState = {
    text: string,
    completed: boolean
}

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
                completed: false,
                text: action.params
            }]
        default:
            return state
    }
}

const reducer = (state: AppState = initialState, action: Action): AppState => {
    return combineReducers({
        todos: todosReducer
    })(state, action) as AppState
}

export default reducer
