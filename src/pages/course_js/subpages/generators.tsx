import React, { FC, Fragment } from 'react';
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";

interface GeneratorsProps {

}

const Generators: FC<GeneratorsProps> = ({}) => {
  const { generators } = getCourseJSContent
  return (
    <>
      <CourseJsContentGenerator field={generators}/>
    </>
  );
};

export default Generators;