import React, { FC } from 'react';
import LeftNav from "../../../../components/left-nav";
import cn from "classnames";
import { LeftContentType } from "../../../../@types/course_js/leftContent";
import { Outlet, useLocation } from "react-router-dom";
import { v4 as uuid } from 'uuid'
import { getJavaScriptContent } from "./content/content_page";
import useStringPath from "../../../../hooks/useStringPath";
import { CourseJsContentGenerator } from "../../../../components";

// Get content by this.id from './content'
const leftContent: LeftContentType = [
  {
    id: 'java_script',
    list: [
      { id: uuid(), linkPath: 'prototype', value: 'Prototype' },
      { id: uuid(), linkPath: 'context', value: 'Context (this)' },
      { id: uuid(), linkPath: 'closures', value: 'Closures' },
      { id: uuid(), linkPath: 'async', value: 'Async' },
      { id: uuid(), linkPath: 'promise', value: 'Promise' },
      { id: uuid(), linkPath: 'objects', value: 'Objects' },
      { id: uuid(), linkPath: 'classes', value: 'Classes' },
      { id: uuid(), linkPath: 'async_await', value: 'Async Await' },
      { id: uuid(), linkPath: 'proxy', value: 'Proxy' },
      { id: uuid(), linkPath: 'proxy_examples', value: 'Proxy Examples' },
      { id: uuid(), linkPath: 'generators', value: 'Generators' },
      { id: uuid(), linkPath: 'arrays', value: 'Arrays' },
    ],
  },
]

interface JavaScriptProps {}
const JavaScript: FC<JavaScriptProps> = () => {
  const { pathname } = useLocation()
  const { lastChildPath } = useStringPath(pathname)
  const { java_script } = getJavaScriptContent
  return (
    <div className={cn('course_js')}>
      <LeftNav
        content={leftContent}
        widthContainer={220}
        navArrowsLinks={{ backNavLink: '-1', forwardNavLink: '1' }}
      />
      <div className="HCJS-content">
        {lastChildPath === 'java_script' ? (
          <CourseJsContentGenerator field={java_script}/>
        ) : (
          <Outlet/>
        )}
      </div>
    </div>
  )
};

export default JavaScript;