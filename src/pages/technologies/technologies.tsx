import React, { FC } from 'react';
import LeftNav from "../../components/left-nav";
import cn from "classnames";
import { LeftContentType } from "../../@types/course_js/leftContent";
import { CourseJsContentGenerator } from "../../components";
import { getTechContent } from "./content/tech_content";
import { Outlet, useLocation } from "react-router-dom";
import useStringPath from "../../hooks/useStringPath";
import { v4 as uuid } from 'uuid'

export const techLeftContent: LeftContentType = [
  {
    id: 'technologies',
    list: [
      { id: uuid(), linkPath: "java_script", value: 'Java Script' },
      { id: uuid(), linkPath: "react", value: 'React' },
      { id: uuid(), linkPath: "regex", value: 'Regex' },
    ],
  },
  // {
  //   id: 'description1',
  //   text: [
  //     {id: 'text-test1', content: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut, consectetur cupiditate, doloribus et explicabo fugiat fugit iusto nisi nobis pariatur perferendis quasi quod sapiente sed sunt suscipit tempore voluptatibus.</>},
  //     {id: 'text-test2', content: 'sdsds'},
  //     {id: 'text-test3', content: 'sdsds'},
  //   ],
  // },
]

interface TechnologiesProps {
  children?: React.ReactNode,
}

const Technologies: FC<TechnologiesProps> = () => {
  const { pathname } = useLocation()
  const { lastChildPath } = useStringPath(pathname)
  const { [lastChildPath]: field } = getTechContent

  return (
    <>
      {lastChildPath === 'technologies' ? (
        <div className={cn('course_js')}>
          <LeftNav
            content={techLeftContent}
            widthContainer={220}
            navArrowsLinks={{backNavLink: '-1', forwardNavLink: '1'}}
          />
          <div className="HCJS-content">
            <CourseJsContentGenerator field={field}/>
          </div>
        </div>
      ) : (
        <Outlet/>
      )}
    </>
  )
};

export default Technologies;