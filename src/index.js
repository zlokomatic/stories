import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import createStore from './redux/createStore';

// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import App from './containers/App';

let store = createStore();

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('react')
);
