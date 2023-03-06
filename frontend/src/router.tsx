import React, { FC, useEffect } from 'react';
import { useLocation, useRoutes } from "react-router-dom";
import {
	Base,
	Examples,
	Feedback,
	Home,
	Hooks,
	IsOnScreen,
	Mixins,
	NotFound,
	ReactPage,
	Redux,
	Regex,
	Sass,
	Settings,
	Technologies,
	Typography
} from "./pages";
import { SubTechnologies } from "./components";

interface RoutesProps {
}

const Router: FC<RoutesProps> = () => {
	const pathname = useLocation()

	useEffect(() => {
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [pathname])

	return useRoutes([
		{
			path: '/',
			element: <Home/>
		},
		{
			path: 'my-workspace',
			element: <Home/>,
		},
		{
			path: 'feedback',
			element: <Feedback/>,
		},
		{
			path: 'settings',
			element: <Settings/>,
		},
		{
			path: 'technologies',
			element: <Technologies/>,
			children: [
				{
					path: 'java_script', element: <SubTechnologies/>,
					// children: [
					//   { path: `prototype`, element: <Prototype/> },
					//   { path: `context`, element: <Context/> },
					//   { path: `closures`, element: <Closures/> },
					//   { path: `async`, element: <Async/> },
					//   { path: `promise`, element: <SubTechnologiesContent/> },
					//   { path: `objects`, element: <Objects/> },
					//   { path: `classes`, element: <Classes/> },
					//   { path: `async_await`, element: <AsyncAwait/> },
					//   { path: `proxy`, element: <Proxy/> },
					//   { path: `proxy_examples`, element: <ProxyExamples/> },
					//   { path: `generators`, element: <Generators/> },
					//   { path: `arrays`, element: <Arrays/> },
					// ]
				},
				{
					path: 'react', element: <ReactPage/>, children: [
						{
							path: 'hooks', element: <Hooks/>, children: [
								{ path: 'is_on_screen', element: <IsOnScreen/> }
							]
						}
					]
				},
				{
					path: 'redux', element: <Redux/>
				},
				{
					path: 'regex', element: <Regex/>, children: [
						{ path: 'base', element: <Base/> },
						{ path: 'examples', element: <Examples/> },
					]
				},
				{
					path: 'sass', element: <Sass/>, children: [
						{ path: 'mixins', element: <Mixins/> },
						{ path: 'typography', element: <Typography/> },
					]
				},
			]
		},
		{
			path: '*',
			element: <NotFound/>,
		},
	])
};

export default Router;