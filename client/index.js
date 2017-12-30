import React from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.css';

// Import Components
import App from './components/App';

// Import redux stuff
import { Provider } from 'react-redux';
import store from './store';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('main'));
