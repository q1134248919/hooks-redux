import React, { Component, Fragment } from "react";

export default class item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <li onClick={this.deleteItems.bind(this)} 
        key={this.props.indexs}   dangerouslySetInnerHTML={{__html:this.props.content}}>
        </li>
      </Fragment>
    );
  }
  deleteItems() {
    console.log(this.props.indexs);
    this.props.deleteItem(this.props.indexs);
  }
}
