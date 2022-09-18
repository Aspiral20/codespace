import React, { FC } from 'react';
import cn from "classnames";
import LeftNav from "../../components/left-nav";
import { leftContent } from "./leftContent";

interface CourseJSProps {

}

const CourseJS: FC<CourseJSProps> = ({}) => {


  return (
    <div className={cn('course_js')}>
      <LeftNav content={leftContent} widthContainer={220}/>
    </div>
  );
};

export default CourseJS;