import { combineReducers } from "redux";

import { MoviesReducer } from './MoviesReducer'
import { DeleteConfirmationReducer } from './DeleteConfirmationReducer'
import { MovieFormReducer } from './MovieFormReducer'

const allReducers = combineReducers({
    MoviesReducer,
    DeleteConfirmationReducer,
    MovieFormReducer,
})

export default allReducers;