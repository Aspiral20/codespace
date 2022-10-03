import React, { FC, Fragment } from 'react';
import LeftNav from "../../components/left-nav";
import { leftContent } from "./content/leftContent";
import { Outlet } from "react-router-dom";
import { getRouter } from "../../conf/RouteElements";
import cn from "classnames";
import { getCourseJSContent } from "./content/content_page";
import { DefaultCode, DefaultText, DefaultTitle } from "../../components";

interface CourseJSProps {
  children?: React.ReactNode
}

const CourseJS: FC<CourseJSProps> = ({children}) => {
  const pathname = window.location.pathname.split('/');
  const currentRoute = getRouter.find(item => item.path === pathname[1])
  const contextRoute = currentRoute && currentRoute.subRoutes && currentRoute?.subRoutes.map(item => (item.element));

  return (
    <div className={cn('course_js')}>
      <LeftNav
        currentRoute={currentRoute}
        content={leftContent}
        widthContainer={220}
      />
      <div className="HCJS-content">
        <Outlet context={contextRoute}/>
      </div>
    </div>
  );
};

export default CourseJS;