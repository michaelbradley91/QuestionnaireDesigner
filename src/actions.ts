export enum VisibilityFilter {
    SHOW_ALL,
    SHOW_COMPLETED
}

export enum ActionType {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
}

export type Action = {
    type: ActionType,
    params: any
}

export const addTodo = (text: string): Action =>
    ({ type: ActionType.ADD_TODO, params: text})

export const toggleTodo = (index: number): Action =>
    ({ type: ActionType.TOGGLE_TODO, params: index})

export const setVisibilityFilter = (filter: VisibilityFilter): Action =>
    ({ type: ActionType.SET_VISIBILITY_FILTER, params: filter})
