import React, { FC } from 'react';
import { getJavaScriptContent } from "../content/content_page";
import { CourseJsContentGenerator } from "../../../../../components";

interface AsyncProps {

}

const Async: FC<AsyncProps> = ({}) => {
  const {async} = getJavaScriptContent

  return (
    <>
      <CourseJsContentGenerator field={async}/>
    </>
  );
};

export default Async;