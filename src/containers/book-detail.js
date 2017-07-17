/**
 * Created by liyangz on 7/17/17.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
class BookDetail extends Component{


  render() {
    if (!this.props.book.activeBook) {
      return (
        <div>Please select a book</div>
      )
    }
    return (
      <div>{this.props.book.activeBook.title}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)

