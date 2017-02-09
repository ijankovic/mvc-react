
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App2 from './containers/App2';
import configureStore from './configureStore';
import { fetchInitialData } from './actions/todos';

let store = configureStore();
store.dispatch(fetchInitialData());

render (
    <Provider store={store}>
        <App2/>
    </Provider>,
    document.getElementById('root')
);