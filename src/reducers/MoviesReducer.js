import * as ActionTypes from '../constants/ActionTypes'
import uuidv4 from 'uuid/v4';
export const MoviesReducer = (state = {
    items: [],
    isFetching: false,
    selectedIdToEdit: '',
    selectedIdToDelete: ''

}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_MOVIE: {
            const movie = {
                ...action.payload.movie,
                title: formatSentence(action.payload.movie.title),
                id: uuidv4()
            }

            return {
                ...state,
                items: [].concat(movie, state.items),
            }
        }



        case ActionTypes.ADD_MOVIES_LIST: {
            const moviesList = action.payload.moviesList;
            const moviesWithId = []

            for (let movie of moviesList) {
                moviesWithId.push({
                    ...movie,
                    title: formatSentence(movie.title),
                    runtime: movie.runtime.replace(/\D/g, ''),
                    id: uuidv4(),
                })
            }

            return {
                ...state,
                items: [].concat(moviesWithId, state.items),
            }
        }

        case ActionTypes.REMOVE_MOVIE: {
            return {
                ...state,
                items: state.items.filter(x => x.id !== state.selectedIdToDelete)
            }
        }

        case ActionTypes.TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: !state.isFetching
            }
        }


        case ActionTypes.UPDATE_MOVIE:
            return {
                ...state,
                items: state.items.map(movie => {
                    if (movie.id === action.payload.movie.id) {
                        return {
                            ...movie,
                            ...action.payload.movie,
                            title: formatSentence(action.payload.movie.title),

                        }
                    }
                    else return movie;
                })
            };

        case ActionTypes.RESET_EDIT_SELECTED_ID: {
            return {
                ...state,
                selectedIdToEdit: ''
            }
        }

        case ActionTypes.SELECT_FOR_EDIT: {
            return {
                ...state,
                selectedIdToEdit: action.payload.selectedId
            }
        }


        case ActionTypes.TOGGLE_DELETE_CONFIRM:
            return {
                ...state,
                selectedIdToDelete: action.payload.selectedId
            }

        default:
            return state;
    }
}

function formatSentence(sentence) {
    return sentence.split(' ').map(function (element) {
        element = element.replace(/[^\w\s]/gi, '')
        element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
        return element;
    }).join(' ');
}