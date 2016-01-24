import {createApp, element} from 'deku';
import {createStore} from './reducer'
import reducer from './reducer'
import Application from './components/application';

// Dispatch an action when the button is clicked
let log = dispatch => event => {
  dispatch({
    type: 'CLICKED'
  })
}

// Define a state-less component
let MyButton = {
  render: ({ props, children, dispatch, context }) => {
    return <button onClick={log(dispatch)}>{children} counter: {context.counter}</button>
  }
}

// Create a Redux store to handle all UI actions and side-effects
let store = createStore(reducer)
export { store }

// Create an app that can turn vnodes into real DOM elements
let render = createApp(document.body, store.dispatch)

// Rendering function
function update (Component) {
  console.log(store.getState())
  render(
    <div>
      <MyButton>Hello World! Foo:</MyButton>
      <Component />
    </div>
    , store.getState()
  )
}

let unsubscribe = store.subscribe(() => update(Application))

export function __unload() {
  console.log('unloading',this)
  unsubscribe()
}

export function __reload(deleted) {
  console.log("__reload", this, deleted)
  store.dispatch({type: '@RESET', state: deleted.store.getState()})
}

update(Application);

// Hooking into HMR
// This is the important part as it will reload your code and re-render the app accordingly
//if (module.hot) {
//  module.hot.accept('./components/Application.jsx', function() {
//    const nextApplication = require('./components/Application.jsx').default;
//    update(nextApplication);
//  });
//}
