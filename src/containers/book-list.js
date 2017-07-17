import React, { Component } from "react";
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
          onClick={() => this.props.selectBook(book)}
        >{book.title}</li>
      )
    });
  };


  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }

}
// glue between React and Redux
function mapStateToProps(state) {
  return {
    books: state.books
  }
}
// Anything returned from this function will end up as props
// on the BookList container
// purpose: to make sure action flows to the reducer
function mapDispatchToProps(dispatch)  {
  // Whenever selectBook is called, the result should be
  // passed to all of our reducers
  // selectbook is just a function
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// turn React component to a container
// connect take in the component
// connect React components to states
export default connect(mapStateToProps, mapDispatchToProps)(BookList)