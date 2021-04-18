import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import todosReducer from "./redux/rootReducer";
import {Provider} from "react-redux";

const store = createStore(todosReducer,applyMiddleware(thunk))


const arr_link = [
  {
    id: 0,
    text: 'Main',
    url: '/'
  },
  {
    id: 1,
    text: 'About us',
    url: '/about'
  },
  {
    id: 2,
    text: 'Contacts',
    url: '/contact'
  },
  {
    id: 3,
    text: 'Price',
    url: '/price'
  },
  {
    id: 4,
    text: 'Metall',
    url: '/metall'
  }]
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App props={arr_link} store={store} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);









