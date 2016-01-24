import { createStore, applyMiddleware, compose, combineReducers} from 'redux';

function counter(state, action) {
  console.log("STATE", state, action)
  switch (action.type) {
    case 'INCREMENT':
      return state + 2
    case 'DECREMENT':
      return state - 1
    case 'CLICKED':
      return (state + 1) * 2
    default:
      return 0
  }
}

const rootReducer = combineReducers({
  counter
})


const reducer = function(state, action) {
  console.log("STATE(r)" , state, action)
  switch (action.type) {
    case '@RESET': return action.state
    default: return rootReducer(state, action)
  }
}

const finalCreateStore = compose(
  // middleware
)(createStore);

export { finalCreateStore as createStore }
export default reducer
