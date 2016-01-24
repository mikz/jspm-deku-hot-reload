import {element} from 'deku'

function increment (dispatch) {
  return () => dispatch({
    type: 'INCREMENT'
  })
}


export default {
  render({dispatch}) {
    return (
      <div>
        <p>Hello World!</p>
        <button onClick={increment(dispatch)}>Click Me</button>
      </div>
    );
  }
}
