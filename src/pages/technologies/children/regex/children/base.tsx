import React, { FC } from 'react';
import { CourseJsContentGenerator } from "../../../../../components";
import { getRegexContent } from "../content/content_page";

interface BaseProps {

}

const Base: FC<BaseProps> = () => {
  const { base} = getRegexContent
  return (
    <CourseJsContentGenerator field={base}/>
  );
};

export default Base;