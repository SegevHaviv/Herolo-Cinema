import React, { Component } from 'react'
import withStyles from 'react-jss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { removeMovie, addMovie } from '../actions/index'
import { bindActionCreators } from 'redux'
import MovieContainer from './MovieContainer';


const styles = {
    root: {
        height: "calc(100% - 73px)",
        width: "100%",
    }
}

class Home extends Component {

    componentDidMo
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <MovieContainer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { MoviesReducer: { items, selectedId } } = state;
    return {
        items: items,
        selectedId: selectedId,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addMovie, removeMovie }, dispatch)
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

const HomeWithStyles = withStyles(styles)(Home);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeWithStyles);