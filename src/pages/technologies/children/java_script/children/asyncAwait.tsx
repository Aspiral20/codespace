import React, { FC } from 'react';
import { getJavaScriptContent } from "../content/content_page";
import { CourseJsContentGenerator } from "../../../../../components";

interface AsyncAwaitProps {

}

const AsyncAwait: FC<AsyncAwaitProps> = ({}) => {
  const {asyncAwait}= getJavaScriptContent
  return (
    <>
      <CourseJsContentGenerator field={asyncAwait}/>
    </>
  );
};

export default AsyncAwait;