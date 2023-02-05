import React, { FC } from 'react';
import cn from "classnames";
import { CourseJsContentGenerator } from "../../../../components";
import { getRegexContent } from "./content/content_page";
import { LeftContentType } from "../../../../@types/course_js/leftContent";
import { v4 as uuid } from "uuid";
import LeftNav from "../../../../components/left-nav";
import { Outlet, useLocation } from "react-router-dom";
import useStringPath from "../../../../hooks/useStringPath";

const leftContent: LeftContentType = [
  {
    id: 'regex',
    list: [
      { id: uuid(), linkPath: 'base', value: 'Base commands' },
      { id: uuid(), linkPath: 'examples', value: 'Examples' },
    ],
  },
]

interface RegexProps {}
const Regex: FC<RegexProps> = () => {
  const { pathname } = useLocation()
  const { lastChildPath } = useStringPath(pathname)
  const { regex } = getRegexContent
  return (
    <div className={cn('course_js')}>
      <LeftNav
        content={leftContent}
        widthContainer={220}
        navArrowsLinks={{ backNavLink: '-1', forwardNavLink: '1' }}
      />
      <div className="HCJS-content">
        {lastChildPath === 'regex' ? (
          <CourseJsContentGenerator field={regex}/>
        ) : (
          <Outlet/>
        )}
      </div>
    </div>
  );
};

export default Regex;