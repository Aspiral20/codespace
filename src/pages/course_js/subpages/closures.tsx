import React, { FC, Fragment } from 'react';
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";

interface ClosuresProps {

}

const Closures: FC<ClosuresProps> = ({}) => {
  const { closures } = getCourseJSContent
  return (
    <>
      <CourseJsContentGenerator field={closures}/>
    </>
  );
};

export default Closures;