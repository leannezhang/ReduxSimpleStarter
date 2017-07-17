export function selectBook(book) {
  // select book is an Action creator, it needs to return an action
  // an object with a type property
  // payload is just more information. (payload: {book: title: 'Book 2'}
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}