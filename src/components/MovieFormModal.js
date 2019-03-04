import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import MovieForm from './MovieForm'

class MovieFormModal extends Component {
    handleClose = () => {
        this.props.toggleMovieForm();
        this.props.resetEditSelectedId();
    }

    render() {
        const { showMovieForm, selectedMovieToEdit, buttonLabel, addMovie, updateMovie, items } = this.props;
        return (
            <Modal show={showMovieForm} onHide={this.handleClose}>
                <Modal.Header center>
                    {buttonLabel}
                </Modal.Header>

                <Modal.Body>
                    <MovieForm
                        buttonLabel={buttonLabel}
                        selectedMovieToEdit={selectedMovieToEdit}
                        handleClose={this.handleClose}
                        addMovie={addMovie}
                        updateMovie={updateMovie}
                        items={items}

                    />
                </Modal.Body>
            </Modal>
        )
    }
}


export default MovieFormModal