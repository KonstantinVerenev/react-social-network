// import React from 'react'
import Navbar from './Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    sidebarData: state.sidebarData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;

// ------- old one wtih props -------
