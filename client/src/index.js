import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'
import App from './components/App';
import {
  ApolloProvider,
} from "@apollo/client";
import 'antd/dist/antd.css';

import client from './apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);