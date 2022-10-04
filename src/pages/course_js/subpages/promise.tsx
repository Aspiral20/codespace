import React, { FC, Fragment } from 'react';
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";

interface PromiseElementProps {

}

const PromiseElement: FC<PromiseElementProps> = ({}) => {
  const {promise} = getCourseJSContent
  console.log()
  return (
    <>
      <CourseJsContentGenerator field={promise}/>
    </>
  );
};

export default PromiseElement;