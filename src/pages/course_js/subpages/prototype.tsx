import React, { FC } from 'react';
import {
  codeItemContent,
  CourseJsContentGenerator,
  getCourseJSContent,
  listItemContent
} from "../content/content_page";

interface PrototypeProps {

}

const Prototype: FC<PrototypeProps> = ({}) => {
  const { prototype } = getCourseJSContent
  return (
    <>
      <CourseJsContentGenerator field={prototype}/>
    </>
  );
};

export default Prototype;