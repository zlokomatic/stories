import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { devTools, persistState } from 'redux-devtools';

import rootReducer from './reducers/root';
import { loadStories } from './reducers/stories';

export default function(){
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer);

  return store;
}
