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
    
}

render() {

  this.props.user.sort(function(a, b) {
    var c = new Date(a.created_at);
    var d = new Date(b.created_at);
    return c-d;
});

if(this.props.user === undefined) {
  return <div> Loading... </div>
} else {
console.log(this.props.user[0])
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
    <div className="container">
    <Row>
    <Col>
      <br />
          <Card>
            <CardImg top width="100%" src=""alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
          </Card>
    </Col>
    <Col>
    <ul class="timeline">
      <br />
    {
        this.props.user.map(data => (
          <li id="repo-name">
		        <div class="direction-r">
			        <div class="flag-wrapper">
				      <span class="flag">{data.name}</span>
              <span class="time-wrapper"><span class="time">{data.created_at}</span></span>
			      </div>
            <div class="desc">{data.languages}</div>
		        </div>
	        </li>
        ))
       }
     </ul>
     </Col>
     </Row>
    </div> 
  </div>
      ) 
    }
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