import React, { Component } from 'react';
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

import CustomNavbarContainer from './containers/CustomNavbarContainer'
import Home from './containers/Home'

const styles = {
  App: {
    width: "100%",
    height: "100%",
  }
}

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.App}>
        <CustomNavbarContainer />

        <Home />
      </div >
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
