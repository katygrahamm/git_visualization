import React, { Component } from "react";
import { connect } from "react-redux";


class Home extends Component {
  constructor(props) {
    super(props)

  }

render() {
  return (
    <div>
     <h6 className="tell-us text-center">Tell Us Your Name</h6>
     <br></br>
      <form className="landing-page-form text-center">
        <input type="text" className="landing-input"></input>
        <br></br>
        <br></br>
        <button type="Submit" href="/myspaces" className="button-landing" variant="outline-secondary">Start Exploring</button>
        <br></br>
        <br></br>
      </form>
    </div>
    ) 
  }
}

export default connect(
)(Home);