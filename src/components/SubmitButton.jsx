import React, { Component } from 'react'

export default class SubmitButton extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // Call when 
  componentDidMount() {
    console.log("I am mounted:ADD buton");
  }

  componentDidUpdate() {
    console.log("I have updated:ADD buton");
  }

  componentWillUnmount() {
    console.log("I will unmount:ADD buton");
  }

  render() {
    return (
      <div className="button-print">
        <button onClick={this.props.onClickHandeler} className={this.props.className}>{this.props.name}</button>
      </div>
    )
  }
}
