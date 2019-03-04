import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { toggleDeleteConfirm, toggleMovieForm, selectForEdit, addMoviesList, toggleIsFetching } from '../actions'
import { connect } from 'react-redux'

import DeleteConfirmationContainer from './DeleteConfirmationContainer'
import MovieFormContainer from './MovieFormContainer';
import MoviesWrapper from '../components/MoviesWrapper'
import MovieTitles from '../constants/MovieTitles'
import { fetchMovies } from '../api'
import withStyles from 'react-jss'
import { LOADING_MOVIES_TEXT } from '../constants/Strings'
import Row from 'react-bootstrap/Row'



const styles = {
    loadingText: {
        textAlign: "center",
        color: "white",
    }
}

class MovieContainer extends Component {

    componentDidMount() {
        const { addMoviesList, toggleIsFetching } = this.props
        toggleIsFetching();
        fetchMovies(MovieTitles).then(moviesList => {
            addMoviesList(moviesList)
            toggleIsFetching()
        })
    }

    render() {
        const { items, isFetching, toggleDeleteConfirm,
            selectForEdit, toggleMovieForm, classes } = this.props
        return (
            isFetching ?
                <h1 className={classes.loadingText}> {LOADING_MOVIES_TEXT} </h1>
                :
                <Row>
                    <MoviesWrapper
                        items={items}
                        toggleDeleteConfirm={toggleDeleteConfirm}
                        selectForEdit={selectForEdit}
                        toggleMovieForm={toggleMovieForm}
                    />

                    <DeleteConfirmationContainer />
                    <MovieFormContainer />

                </Row>
        );
    }
}



function mapStateToProps(state) {
    const { MoviesReducer: { items, isFetching } } = state;
    return {
        items: items,
        isFetching: isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleDeleteConfirm,
        toggleMovieForm,
        selectForEdit,
        addMoviesList,
        toggleIsFetching
    }, dispatch)
}


const MovieContainerWithStyles = withStyles(styles)(MovieContainer);
export default connect(mapStateToProps, mapDispatchToProps)(MovieContainerWithStyles);


