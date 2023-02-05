import React, { FC } from 'react';
import cn from "classnames";
import LeftNav from "../../../../components/left-nav";
import { Outlet, useLocation } from "react-router-dom";
import { LeftContentType } from "../../../../@types/course_js/leftContent";
import { v4 as uuid } from 'uuid'
import useStringPath from "../../../../hooks/useStringPath";
import { CourseJsContentGenerator } from "../../../../components";
import { getReactContent } from "./content/content_page";

const leftContent: LeftContentType = [
  {
    id: 'java_script',
    list: [
      { id: uuid(), linkPath: 'hooks', value: 'Hooks' }
    ],
  },
]

interface ReactProps {

}

const ReactPage: FC<ReactProps> = () => {
  const { react } = getReactContent
  const { pathname } = useLocation()
  const { lastChildPath } = useStringPath(pathname)
  return (
    <>
      {lastChildPath === 'react' ? (
        <div className={cn('course_js')}>
          <LeftNav
            content={leftContent}
            widthContainer={220}
            navArrowsLinks={{ backNavLink: '-1', forwardNavLink: '1' }}
          />
          <div className="HCJS-content">
            <CourseJsContentGenerator field={react}/>
          </div>
        </div>
      ) : (
        <Outlet/>
      )}

    </>
  );
};

export default ReactPage;