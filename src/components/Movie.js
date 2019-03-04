import React from 'react'
import { Card, Button } from 'react-bootstrap'
import * as strings from '../constants/Strings'

import withStyles from 'react-jss'

const styles = {
    buttonsContainer: {
        display: "flex",
    },
    addButton: {
        flex: "0.3",
        background: "black"
    },
    editButton: {
        flex: "0.3",
        marginRight: "auto",
        background: "black",
    },
    movieCard: {
        width: '17rem',
        margin: 5,
    }
}


function Movie(props) {
    const { title, year, runtime, genre, director, id } = props.movie;
    const { toggleDeleteConfirm, selectForEdit, toggleMovieForm, classes } = props


    const handleCancelClick = () => {
        toggleDeleteConfirm(id)
    }

    const handleEditClick = () => {
        selectForEdit(id)
        toggleMovieForm();
    }

    return (
        <Card className={classes.movieCard}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Director: {director}</Card.Text>
                <Card.Text>Genre: {genre}</Card.Text>
                <Card.Text>Year: {year}</Card.Text>
                <Card.Text>Runtime: {runtime} minutes</Card.Text>

                <div className={classes.buttonsContainer} >
                    <Button
                        variant="dark"
                        className={classes.editButton}
                        onClick={() => handleEditClick()}>
                        {strings.EDIT_BUTTON_TEXT}
                    </Button>

                    <Button
                        variant="dark"
                        className={classes.addButton}
                        onClick={() => handleCancelClick()}>
                        {strings.REMOVE_BUTTON_TEXT}
                    </Button>
                </div>

            </Card.Body>
        </Card>
    )
}

export default withStyles(styles)(Movie)