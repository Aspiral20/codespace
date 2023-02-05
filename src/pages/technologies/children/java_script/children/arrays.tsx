import React, { FC } from 'react';
import { getJavaScriptContent } from "../content/content_page";
import { CourseJsContentGenerator } from "../../../../../components";

interface ArraysProps {

}

const Arrays: FC<ArraysProps> = ({}) => {
  const { arrays } = getJavaScriptContent

  return (
    <>
      <CourseJsContentGenerator field={arrays}/>
    </>
  );
};

export default Arrays;