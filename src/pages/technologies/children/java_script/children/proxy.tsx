import React, { FC } from 'react';
import { CourseJsContentGenerator } from "../../../../../components";
import { getJavaScriptContent } from "../content/content_page";

interface ProxyProps {

}

const Proxy: FC<ProxyProps> = () => {
  const { proxy } = getJavaScriptContent
  return (
    <>
      <CourseJsContentGenerator field={proxy}/>
    </>
  );
};

export default Proxy;