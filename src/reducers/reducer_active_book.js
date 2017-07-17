/**
 * Created by liyangz on 7/17/17.
 */
// state is referring to the reducer is responsible for
export default function(state=null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      // always return a fresh object as state (cannot mutate the state)
      return {
        activeBook: action.payload
      }
  }
  return {
    state
  }
}