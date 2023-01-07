import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Spin from "./components/ui/Feedback/Spin/Spin";

const LinkPage = React.lazy(() => import('./pages/links/[id]'));
const IndexPage = React.lazy(() => import('./pages'));
const ErrorPage = React.lazy(() => import('./pages/error'));


const router = createBrowserRouter([
	{
		path: "/",
		element: <IndexPage/>,
		errorElement: <ErrorPage/>
	},
	{
		path: "/links/:linkId",
		element: <LinkPage/>
	},
]);

const Router = (): JSX.Element => {
	return (
		<React.Suspense fallback={<Spin/>}>
			<RouterProvider router={router} />
		</React.Suspense>
	)
}

export default Router
