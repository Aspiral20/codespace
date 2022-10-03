import React, { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";
import { getRouter } from "../conf/RouteElements";
import { Body, Home, Prototype, Context, CourseJS } from "../pages";

const RoutesGenerator = () => {
  return (
    <Routes>
      <Route path='/' element={<Body/>}>
        {getRouter.map(item => (
          <Fragment key={item.id}>
            {item.subRoutes && item.subRoutes !== [] ?
              <Route key={item.id} path={item.path} element={item.element}>
                {item.subRoutes.map(subItem => (
                    <Route key={subItem.id} path={subItem.path} element={subItem.element}/>
                  )
                )}
              </Route>
              : item.index ?
                <Route key={item.id} index element={item.element}/>
                :
                <Route key={item.id} path={item.path} element={item.element}/>
            }
          </Fragment>
        ))}
      </Route>
    </Routes>
  );
};

export default RoutesGenerator;