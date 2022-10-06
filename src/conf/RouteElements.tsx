import {
  Home,
  CourseJS,
  Prototype,
  Context,
  Closures,
  Async,
  PromiseElement,
  Objects,
  Classes,
  AsyncAwait,
  Proxy,
  Generators,
  Arrays,
  NotFound,
  Settings
} from "../pages";

export const getRouter = [
  {
    id: 'Home',
    index: true,
    element: <Home/>,
    value: 'Home'
  },
  {
    id: 'CourseJS',
    path: 'high-course-js',
    element: <CourseJS/>,
    value: 'High Course Js',
    subRoutes: [
      { id: 'prototype', path: `prototype`, element: <Prototype/>, value: 'Prototype' },
      { id: 'context', path: `context`, element: <Context/>, value: 'Context (this)' },
      { id: 'closures', path: `closures`, element: <Closures/>, value: 'Closures' },
      { id: 'async', path: `async`, element: <Async/>, value: 'Async (setTimeout)' },
      { id: 'promise', path: `promise`, element: <PromiseElement/>, value: 'Promise' },
      { id: 'objects', path: `objects`, element: <Objects/>, value: 'Objects' },
      { id: 'classes', path: `classes`, element: <Classes/>, value: 'Classes' },
      { id: 'asyncAwait', path: `asyncAwait`, element: <AsyncAwait/>, value: 'Async Await' },
      { id: 'proxy', path: `proxy`, element: <Proxy/>, value: 'Proxy' },
      { id: 'generators', path: `generators`, element: <Generators/>, value: 'Generators' },
      { id: 'arrays', path: `arrays`, element: <Arrays/>, value: 'Arrays' },
    ]
  },
  {
    id: 'Settings',
    path: 'settings',
    element: <Settings/>,
    value: 'Settings',
  },
  {
    id: 'NotFound-page',
    path: '*',
    element: <NotFound/>,
    value: ''
  }
]