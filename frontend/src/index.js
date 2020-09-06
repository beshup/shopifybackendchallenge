import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'

import 'bootstrap/dist/css/bootstrap.css';

const httpLink = ApolloLink.split(
  (operation) => operation.getContext().hasUpload,
  createUploadLink({ uri: 'http://localhost:3000/graphql' }),
  new HttpLink({ uri: 'http://localhost:3000/graphql' }),
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
  fetchOptions: {
    mode: 'no-cors',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


