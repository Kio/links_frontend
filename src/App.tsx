import React, {useEffect, useState} from 'react';
import Router from "./routes";
import {ApolloProvider} from "@apollo/client";
import {client} from "./apollo/init";

// export const TestCSRF = () => {
//   const [testGet, setTestGet] = useState(0)
//   const [testPost, setPostGet] = useState(0)
//   const a = async () => {
//     setTestGet(await testRequest('GET'))
//     setPostGet(await testRequest('POST'))
//   }
//   useEffect(() => {
//     a()
//   }, [])
//   return <div>{testGet} + {testPost}</div>
// }

const App = (): JSX.Element => {
	return (
		<ApolloProvider client={client}>
			<Router/>
		</ApolloProvider>
	);
}

export default App;
