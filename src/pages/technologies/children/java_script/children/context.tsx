import React, { FC } from 'react';
import { CourseJsContentGenerator } from "../../../../../components";
import { getJavaScriptContent } from "../content/content_page";

interface ContextProps {

}

const Context: FC<ContextProps> = ({}) => {
  const {context} = getJavaScriptContent

  return (
    <>
      <CourseJsContentGenerator field={context}/>
    </>
  );
};

export default Context;