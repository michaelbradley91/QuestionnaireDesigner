import { VisibilityFilter, Action, ActionType } from "./actions";
import { combineReducers } from 'redux'

export type TodoType = {
    text: string,
    completed: boolean
};

type AppState = {
    visibilityFilter: VisibilityFilter,
    todos: TodoType[]
}

export const initialState: AppState = {
    visibilityFilter: VisibilityFilter.SHOW_ALL,
    todos: []
}

const todosReducer = (state: TodoType[] = initialState.todos, action: Action): TodoType[] => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [...state, {
                text: action.params,
                completed: false
            }]
        case ActionType.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.params) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        default:
            return state
    }
}

const visibilityFilterReducer = (state: VisibilityFilter = initialState.visibilityFilter, action: Action): VisibilityFilter => {
    switch (action.type) {
        case ActionType.SET_VISIBILITY_FILTER:
            return action.params
        default:
            return state
    }
}

const reducer = (state: AppState = initialState, action: Action): AppState => {
    return <AppState> combineReducers({
        todos: todosReducer,
        visibilityFilter: visibilityFilterReducer
    })(state, action)
}

export default reducer;