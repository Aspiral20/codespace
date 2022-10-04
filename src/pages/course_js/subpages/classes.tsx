import React, { FC, Fragment } from 'react';
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";

interface ClassesProps {

}

const Classes: FC<ClassesProps> = ({}) => {
  const { classes } = getCourseJSContent
  return (
    <>
      <CourseJsContentGenerator field={classes}/>
    </>
  );
};

export default Classes;