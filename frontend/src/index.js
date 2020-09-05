import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'

import 'bootstrap/dist/css/bootstrap.css';

const link = createUploadLink({
  uri: "http://localhost:3000/graphql"
});
const client = new ApolloClient({ 
  cache: new InMemoryCache(),
  link: link,
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


