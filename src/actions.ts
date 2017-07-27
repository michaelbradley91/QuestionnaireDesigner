export enum ActionType {
    ADD_TODO
}

export type Action = {
    type: ActionType,
    params: any
}

export const addTodo = (text: string): Action =>
    ({ type: ActionType.ADD_TODO, params: text})
