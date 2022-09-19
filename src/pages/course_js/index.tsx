import React, { FC } from 'react';
import cn from "classnames";
import LeftNav from "../../components/left-nav";
import { leftContent } from "./content/leftContent";
import { Outlet } from "react-router-dom";
import { getRouter } from "../../conf/RouteElements";

interface CourseJSProps {
}

const CourseJS: FC<CourseJSProps> = ({}) => {
  //todo add current Router
  return (
    <div className={cn('course_js')}>
      <LeftNav
        // currentRoute={currentRouter}
        content={leftContent}
        widthContainer={220}
      />
      <div className="HCJS-content">
        <Outlet/>
      </div>
    </div>
  );
};

export default CourseJS;