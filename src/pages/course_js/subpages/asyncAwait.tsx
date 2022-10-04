import React, { FC, Fragment } from 'react';
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";

interface AsyncAwaitProps {

}

const AsyncAwait: FC<AsyncAwaitProps> = ({}) => {
  const {asyncAwait}= getCourseJSContent
  return (
    <>
      <CourseJsContentGenerator field={asyncAwait}/>
    </>
  );
};

export default AsyncAwait;