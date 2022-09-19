import { Home, CourseJS, Prototype } from "../pages";
import NotFound from "../pages/not-found";

export const getRouter = [
  { id: 'Home', index: true, element: <Home/>, value: 'Home' },
  { id: 'CourseJS', path: 'high-course-js', element: <CourseJS/>, value: 'High Course Js', subRoutes: [
      { id: 'prototype', path: `?id=prototype`, element: <Prototype/>, value: 'Prototype' },
    ]
  },
  { id: 'NotFound-page', path: '*', element: <NotFound/>}
]