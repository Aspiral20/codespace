import React from 'react';
import { Route, Routes } from "react-router-dom";
import { getRouter } from "../conf/RouteElements";
import { Body } from "../pages";

const RoutesGenerator = () => {
  return (
    <Routes>
      <Route path='/' element={<Body/>}>
        {getRouter.map(item => {
          return <>
            {item.subRoutes && item.subRoutes !== [] ?
              <Route key={item.id} path={item.path} element={item.element}>
                {item.subRoutes.map(subItem => (
                    <Route key={subItem.id} path={'?id=' + subItem.path} element={subItem.element}/>
                  )
                )}
              </Route>
              : item.index ?
                <Route key={item.id} index element={item.element}/>
                :
                <Route key={item.id} path={item.path} element={item.element}/>
            }
          </>
        })}
      </Route>
    </Routes>
  );
};

export default RoutesGenerator;