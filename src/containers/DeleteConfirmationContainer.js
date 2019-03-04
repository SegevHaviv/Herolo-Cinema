import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleSetIsOpen, removeMovie } from '../actions'
import DeleteConfirmation from '../components/DeleteConfirmation'

class DeleteConfirmationContainer extends Component {
    render() {
        const { isOpen, toggleSetIsOpen, removeMovie, selectedTitle } = this.props;
        return (
            <DeleteConfirmation
                isOpen={isOpen}
                toggleSetIsOpen={toggleSetIsOpen}
                removeMovie={removeMovie}
                selectedTitle={selectedTitle} />
        )
    }
}


function mapStateToProps(state) {
    const { selectedIdToDelete, items } = state.MoviesReducer
    const { isOpen } = state.DeleteConfirmationReducer

    const selectedMovieToDelete = selectedIdToDelete ?
        items.find(x => x.id === selectedIdToDelete) : ''

    const selectedTitle = selectedMovieToDelete ? selectedMovieToDelete.title : ''

    return {
        selectedTitle: selectedTitle,
        isOpen: isOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ removeMovie, toggleSetIsOpen }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteConfirmationContainer);