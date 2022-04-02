import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {
  ApolloProvider,
} from "@apollo/client";
import 'antd/dist/antd.css';

import { BrowserRouter as Router } from 'react-router-dom';

import client from './apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);