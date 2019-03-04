import { TOGGLE_MOVIE_FORM } from '../constants/ActionTypes'

export const MovieFormReducer = (state = {
    showMovieForm: false
},
    action) => {

    switch (action.type) {
        case TOGGLE_MOVIE_FORM:
            return {
                ...state,
                showMovieForm: !state.showMovieForm
            }

        default:
            return state;
    }
}