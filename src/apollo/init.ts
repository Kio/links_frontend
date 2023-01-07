import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: `http://localhost:8000/api`,
});

let _csrfToken = localStorage.getItem("csrfToken") ?? "";

(async () => {
  fetch(`http://localhost:8000/csrf/`, {
    credentials: 'include',
  }).then(response => response.json())
  .then(data => {
    localStorage.setItem("csrfToken", _csrfToken)
    _csrfToken = data.csrfToken
  });
})()

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "X-CSRFToken": _csrfToken
    },
    credentials: 'include',
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


