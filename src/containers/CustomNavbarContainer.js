import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleMovieForm } from '../actions'
import { ADD_BUTTON_TEXT, HEADLINE_TEXT } from '../constants/Strings'

const styles = {

    navBarTitleContainer: {
        ['@media (max-width:420px)']: { // eslint-disable-line no-useless-computed-key
            marginLeft: 0,
        },
        marginLeft: 20,
        flex: 1,
    },

    navBarTitle: {
        fontSize: 28,
        color: "white",
        cursor: "pointer",
    },

    addButton: {
        ['@media (max-width:420px)']: { // eslint-disable-line no-useless-computed-key
            marginRight: 5,
        },
        marginRight: 35,
        fontSize: 25,
        flex: 0.15,
        color: "white"
    }
}

function CustomNavbarContainer(props) {
    const { classes } = props;
    const { toggleMovieForm } = props;

    function refreshPage() {
        window.location.reload();
    }

    return (
        <Navbar bg="inherit">
            <Navbar.Brand
                className={classes.navBarTitleContainer}>
                <Button
                    className={classes.navBarTitle}
                    variant="inherit"
                    onClick={refreshPage}>
                    {HEADLINE_TEXT}
                </Button>
            </Navbar.Brand>

            <Button
                type="submit"
                variant="inherit"
                className={classes.addButton}
                onClick={toggleMovieForm}
            >
                {ADD_BUTTON_TEXT}
            </Button>
        </Navbar>
    )
}

CustomNavbarContainer.propTypes = {
    classes: PropTypes.object.isRequired,
}


const mapStatehToProps = (state) => {
    const { MovieFormReducer: { showMovieForm } } = state;
    return {
        showMovieForm: showMovieForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleMovieForm }, dispatch)
}


const CustomNavbarContainerWithStyles = withStyles(styles)(CustomNavbarContainer);

export default connect(mapStatehToProps, mapDispatchToProps)(CustomNavbarContainerWithStyles)