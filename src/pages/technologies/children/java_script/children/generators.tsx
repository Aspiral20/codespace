import React, { FC } from 'react';
import { getJavaScriptContent } from "../content/content_page";
import { CourseJsContentGenerator } from "../../../../../components";

interface GeneratorsProps {

}

const Generators: FC<GeneratorsProps> = ({}) => {
  const { generators } = getJavaScriptContent
  return (
    <>
      <CourseJsContentGenerator field={generators}/>
    </>
  );
};

export default Generators;