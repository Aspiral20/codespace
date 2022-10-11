import React, { FC } from 'react';
import { CourseJsContentGenerator, getCourseJSContent } from "../content/content_page";

interface CjsStartPageProps {

}

const CjsStartPage: FC<CjsStartPageProps> = ({}) => {
  const { cjs_start_page } = getCourseJSContent

  return (
    <div>
      <CourseJsContentGenerator field={cjs_start_page}/>
    </div>
  );
};

export default CjsStartPage;