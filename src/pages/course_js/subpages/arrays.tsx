import React, { FC, Fragment } from 'react';
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";

interface ArraysProps {

}

const Arrays: FC<ArraysProps> = ({}) => {
  const { arrays } = getCourseJSContent

  return (
    <>
      <CourseJsContentGenerator field={arrays}/>
    </>
  );
};

export default Arrays;