import { Home, CourseJS, Prototype } from "../pages";

export const getRouter = [
  { id: 'Home', index: true, element: <Home/>, value: 'Home' },
  { id: 'CourseJS', path: 'high-course-js', element: <CourseJS/>, value: 'High Course Js', subRoutes: [
      { id: 'Prototype', path: 'prototype', element: <Prototype/>, value: 'Prototype' }
    ]
  },
]