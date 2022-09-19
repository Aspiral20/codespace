import React, { FC } from 'react';
import { LeftContentType } from "../types/course_js/leftContent";
import { Link } from "react-router-dom";
import cn from "classnames";
import { RoutesType } from "../types/routesType";

interface LeftNavProps {
  content: LeftContentType,
  widthContainer?: number,
  currentRoute?: RoutesType
}

const LeftNav: FC<LeftNavProps> = ({
  content,
  widthContainer,
  currentRoute
}) => {
  return (
    <div className={'left-nav'} style={{ width: widthContainer }}>
      {content.map(({ id, title, text, list }) => (
        <div key={id} className="left-nav_item">
          {title && title !== '' && (
            <div className="title">
              {title}
            </div>
          )}
          {text && text !== [] && (
            <div className="left-nav_item-text">
              {text.map(({ id, content }) => (
                <div key={id} className="text-item">
                  {content}
                </div>
              ))}
            </div>
          )}
          {list && list !== [] && (
            <div className="left-nav_item-list">
                {/*{subRoutes ? subRoutes.map(subRouter => (*/}
                {/*  <>*/}
                {/*    <Link key={subRouter.id} to={path + '/' + subRouter.path}>*/}
                {/*      <div className={cn('item', {active: pathname.includes(path)})}>{subRouter.value}</div>*/}
                {/*    </Link>*/}
                {/*  </>*/}
                {/*)) : null}*/}


              {list.map(({ id, name }) => {
                console.log(currentRoute)
                return (
                  <Link key={id} to={`${currentRoute?.path}/id=${id}`} className="list-item">
                    <div className="triangle"></div>
                    {name}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeftNav;