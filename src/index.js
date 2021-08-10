import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Styles
import './index.css';

// Components
import App from './App';

// Redux
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { fetchMovies } from './redux/movies/fetchMoviesSlice';

store.dispatch(fetchMovies())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
