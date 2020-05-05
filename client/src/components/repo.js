import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as actions from '../actions';

class Repo extends Component {
  constructor(props) {
    super(props)

  }

componentDidMount(){
    let username = localStorage.getItem('username')
    this.props.fetchUser(username)
    console.log(username)
}

render() {
return (
  <div id="home-page">
    <Navbar fixed="top" className="sticky-nav">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src=""
          width="30"
          height="30"
          className="d-inline-block align-top"
            />{' '}
          GitViz
      </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
    </Navbar>
    <div>
    {
        this.props.user.map(data => (
            <ul>
                <li>{data.name}</li>
            </ul>
                
        ))
    }
    </div>
  </div>
    ) 
  }
}

function mapStateToProps(state) {
    return ({
      user: state.user,
    })
  }
  
  export default connect(
    mapStateToProps,
    actions
)(Repo);