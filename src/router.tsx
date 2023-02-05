import React, { FC, useEffect } from 'react';
import { useLocation, useRoutes } from "react-router-dom";
import {
  Arrays,
  Async,
  AsyncAwait,
  Classes,
  Closures,
  Context,
  JavaScript,
  Feedback,
  Generators,
  Home,
  NotFound,
  Objects,
  PromiseElement,
  Prototype,
  Proxy,
  Settings,
  ReactPage,
  Regex,
  Hooks,
  Technologies,
  ProxyExamples,
  IsOnScreen, Examples, Base,
} from "./pages";

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
          path: 'java_script', element: <JavaScript/>, children: [
            { path: `prototype`, element: <Prototype/> },
            { path: `context`, element: <Context/> },
            { path: `closures`, element: <Closures/> },
            { path: `async`, element: <Async/> },
            { path: `promise`, element: <PromiseElement/> },
            { path: `objects`, element: <Objects/> },
            { path: `classes`, element: <Classes/> },
            { path: `async_await`, element: <AsyncAwait/> },
            { path: `proxy`, element: <Proxy/> },
            { path: `proxy_examples`, element: <ProxyExamples/> },
            { path: `generators`, element: <Generators/> },
            { path: `arrays`, element: <Arrays/> },
          ]
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
          path: 'regex', element: <Regex/>, children: [
            { path: 'base', element: <Base/> },
            { path: 'examples', element: <Examples/> },
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