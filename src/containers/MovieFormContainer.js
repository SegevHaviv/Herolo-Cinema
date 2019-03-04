import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieFormModal from '../components/MovieFormModal'
import { bindActionCreators } from 'redux'
import { toggleMovieForm, resetEditSelectedId, addMovie, updateMovie } from '../actions'

class MovieFormContainer extends Component {
    render() {
        const { showMovieForm, toggleMovieForm, selectedMovieToEdit, buttonLabel, resetEditSelectedId
            , addMovie, updateMovie, items } = this.props
        return (
            <MovieFormModal
                selectedMovieToEdit={selectedMovieToEdit}
                showMovieForm={showMovieForm}
                toggleMovieForm={toggleMovieForm}
                buttonLabel={buttonLabel}
                resetEditSelectedId={resetEditSelectedId}
                addMovie={addMovie}
                updateMovie={updateMovie}
                items={items}
            />
        )
    }
}

function mapStateToProps(state) {
    const { showMovieForm } = state.MovieFormReducer
    const { selectedIdToEdit, items } = state.MoviesReducer

    if (selectedIdToEdit) {
        const selectedMovieToEdit = items.find(item => item.id === selectedIdToEdit)

        return {
            selectedMovieToEdit: selectedMovieToEdit,
            resetEditSelectedId: resetEditSelectedId,
            showMovieForm: showMovieForm,
            buttonLabel: 'Edit',
            items: items
        }
    } else {
        return {
            selectedMovieToEdit: '',
            resetEditSelectedId: resetEditSelectedId,
            showMovieForm: showMovieForm,
            buttonLabel: 'Add',
            items: items
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleMovieForm, resetEditSelectedId, addMovie, updateMovie }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieFormContainer)
