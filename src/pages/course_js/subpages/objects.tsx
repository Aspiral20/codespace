import React, { FC, Fragment } from 'react';
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";

interface ObjectsProps {

}

const Objects: FC<ObjectsProps> = ({}) => {
  const { objects } = getCourseJSContent
  return (
    <>
      <CourseJsContentGenerator field={objects}/>
    </>
  );
};

export default Objects;