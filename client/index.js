import React from 'react';
import { render } from 'react-dom';

// Import Components
import App from './components/App';

// Import redux stuff
import { Provider } from 'react-redux';
import store from './store';

const app = {
  <Provider store={store}>
    <App />
  </Provider>
}

render(app, document.querySelector('#main'));
