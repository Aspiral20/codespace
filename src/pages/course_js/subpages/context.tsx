import React, { FC, Fragment } from 'react';
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";

interface ContextProps {

}

const Context: FC<ContextProps> = ({}) => {
  const {context} = getCourseJSContent

  return (
    <>
      <CourseJsContentGenerator field={context}/>
    </>
  );
};

export default Context;