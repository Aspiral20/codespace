import React, { FC } from 'react';
import { getJavaScriptContent } from "../content/content_page";
import { CourseJsContentGenerator } from "../../../../../components";

interface PromiseElementProps {

}

const PromiseElement: FC<PromiseElementProps> = ({}) => {
  const {promise} = getJavaScriptContent
  console.log()
  return (
    <>
      <CourseJsContentGenerator field={promise}/>
    </>
  );
};

export default PromiseElement;