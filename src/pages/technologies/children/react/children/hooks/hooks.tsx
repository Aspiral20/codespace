import React, { FC } from 'react';
import { CourseJsContentGenerator } from "../../../../../../components";
import cn from "classnames";
import LeftNav from "../../../../../../components/left-nav";
import { Outlet, useLocation } from "react-router-dom";
import { LeftContentType } from "../../../../../../@types/course_js/leftContent";
import { v4 as uuid } from "uuid";
import { getHooksContent } from "./content/content_page";
import useStringPath from "../../../../../../hooks/useStringPath";

const leftContent: LeftContentType = [
  {
    id: 'is_on_screen',
    list: [
      { id: uuid(), linkPath: 'is_on_screen', value: 'Is On Screen' }
    ],
  },
]

interface HooksProps {

}

const Hooks: FC<HooksProps> = ({}) => {
  const { hooks } = getHooksContent
  const { pathname } = useLocation()
  const { lastChildPath } = useStringPath(pathname)

  return (
    <div className={cn('course_js')}>
      <LeftNav
        content={leftContent}
        widthContainer={220}
        navArrowsLinks={{ backNavLink: '-1', forwardNavLink: '1' }}
      />
      <div className="HCJS-content">
        {lastChildPath === 'hooks' ? <CourseJsContentGenerator field={hooks}/> : <Outlet/>}
      </div>
    </div>
  );
};

export default Hooks;