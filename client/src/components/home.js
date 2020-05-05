import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Git from '../assets/git-logo.png';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username:''
    }
  }

componentDidMount() {
  localStorage.removeItem('username')
}

handleSubmit(event) {
  // event.preventDefault()
  localStorage.setItem('username', this.state.username)
  console.log(this.state.username)
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
    <Container id="logo-container">
      <Row>
        <Col md="5">
          <Form>
            <p>A non-technical way to visualize Github repositories</p>
            <Input placeholder="Search username" onChange={event=> this.setState({ username: event.target.value })} />
            <br />
           <a href='/repo-view'><Button onClick={ event => {this.handleSubmit(event)}} href='/repo-view'>Search</Button></a>
          </Form>
        </Col>
        <Col md="6">
          <img src={Git} height="400px" width="auto"
          />
        </Col>
      </Row>
    </Container>
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
)(Home);