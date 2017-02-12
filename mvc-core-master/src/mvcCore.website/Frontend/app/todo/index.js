
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './configureStore';
import { fetchInitialData } from './actions/todos';

let store = configureStore();
store.dispatch(fetchInitialData());

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);