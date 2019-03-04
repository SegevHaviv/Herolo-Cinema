import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
class DeleteConfirmation extends Component {

    handleClose = () => {
        const { toggleSetIsOpen } = this.props;
        toggleSetIsOpen();
    }

    handleDelete = () => {
        const { removeMovie } = this.props;
        removeMovie();
        this.handleClose();
    }

    render() {
        const { isOpen, selectedTitle } = this.props
        return (

            <Modal show={isOpen} onHide={this.handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    You sure you would like to delete {selectedTitle}?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleDelete}>
                        Confirm
                    </Button>

                    <Button variant="primary" onClick={this.handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>

            </Modal>
        )
    }
}


export default DeleteConfirmation 