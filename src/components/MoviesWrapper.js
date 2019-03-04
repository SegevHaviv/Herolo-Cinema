import React, { Component } from 'react'
import Movie from '../components/Movie';
import { NO_MOVIES_TEXT } from '../constants/Strings'
import Row from 'react-bootstrap/Row'
import withStyles from 'react-jss'

const styles = {
    container: {
        margin: "auto"
    },
    noMoviesText: {
        margin: "auto",
        color: "white"
    },
    moviesCardsContainer: {
        justifyContent: "center"
    }
}

class MoviesWrapper extends Component {
    render() {
        const { items, toggleDeleteConfirm, selectForEdit, toggleMovieForm, classes } = this.props;
        return (
            <div className={classes.container}>
                {
                    items.length === 0 ?
                        <h1 className={classes.noMoviesText}> {NO_MOVIES_TEXT} </h1>
                        :
                        <Row className={classes.moviesCardsContainer}>
                            {items.map(movie =>
                                <Movie
                                    key={movie.id}
                                    movie={movie}
                                    toggleDeleteConfirm={toggleDeleteConfirm}
                                    selectForEdit={selectForEdit}
                                    toggleMovieForm={toggleMovieForm}
                                />
                            )}
                        </Row>
                }
            </div>
        )
    }
}

export default withStyles(styles)(MoviesWrapper)