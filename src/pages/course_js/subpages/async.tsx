import React, { FC, Fragment } from 'react';
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";

interface AsyncProps {

}

const Async: FC<AsyncProps> = ({}) => {
  const {async} = getCourseJSContent

  return (
    <>
      <CourseJsContentGenerator field={async}/>
    </>
  );
};

export default Async;