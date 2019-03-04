import { TOGGLE_DELETE_CONFIRM, TOGGLE_SET_IS_OPEN } from '../constants/ActionTypes'

export const DeleteConfirmationReducer = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case TOGGLE_SET_IS_OPEN:
        case TOGGLE_DELETE_CONFIRM:
            return {
                ...state,
                isOpen: !state.isOpen,
            }
        default:
            return state;
    }
}