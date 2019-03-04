import * as ActionTypes from '../constants/ActionTypes'

// Delete Confirmation
export function toggleSetIsOpen() {
    return {
        type: ActionTypes.TOGGLE_SET_IS_OPEN,
    }
}

export function toggleIsFetching() {
    return {
        type: ActionTypes.TOGGLE_IS_FETCHING,
    }
}


export function toggleDeleteConfirm(id) {
    return {
        type: ActionTypes.TOGGLE_DELETE_CONFIRM,
        payload: {
            selectedId: id,
        }
    }
}

export function resetSelectedId() {
    return {
        type: ActionTypes.RESET_SELECTED_ID,
    }
}

// MOVIE FORM

export function toggleMovieForm() {
    return {
        type: ActionTypes.TOGGLE_MOVIE_FORM,
    }
}

export function updateMovie(movie) {
    return {
        type: ActionTypes.UPDATE_MOVIE,
        payload: {
            movie: movie,
        }
    }
}

export function resetEditSelectedId() {
    return {
        type: ActionTypes.RESET_EDIT_SELECTED_ID,
    }
}

export function selectForEdit(id) {
    return {
        type: ActionTypes.SELECT_FOR_EDIT,
        payload: {
            selectedId: id,
        }
    }
}

// MOVIES
export function addMovie(movie) {
    return {
        type: ActionTypes.ADD_MOVIE,
        payload: {
            movie: movie
        }
    }
}

export function addMoviesList(moviesList) {
    return {
        type: ActionTypes.ADD_MOVIES_LIST,
        payload: {
            moviesList: moviesList,
        }
    }
}

export function removeMovie() {
    return {
        type: ActionTypes.REMOVE_MOVIE,
    }
}

