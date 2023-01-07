import React from 'react';
import Router from "./routes";
import {ApolloProvider} from "@apollo/client";
import {client} from "./apollo/init";

const App = (): JSX.Element => {
	return (
		<ApolloProvider client={client}>
			<Router/>
		</ApolloProvider>
	);
}

export default App;
