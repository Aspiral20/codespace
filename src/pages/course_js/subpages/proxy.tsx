import React, { FC, Fragment } from 'react';
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";

interface ProxyProps {

}

const Proxy: FC<ProxyProps> = ({}) => {
  const { proxy } = getCourseJSContent
  return (
    <>
      <CourseJsContentGenerator field={proxy}/>
    </>
  );
};

export default Proxy;