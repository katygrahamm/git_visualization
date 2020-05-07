import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
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
  console.log(this.props.user)
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
    <Row>
   
    {
        this.props.user.map(data => (
          <Card>
          <CardBody>
            <CardTitle>{data.name}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
          </Card>
        ))
       }
    </Row>
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