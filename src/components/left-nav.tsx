import React, { FC } from 'react';
import { LeftContentType } from "../types/course_js/leftContent";
import { Link } from "react-router-dom";
import cn from "classnames";
import { RoutesType } from "../types/routesType";

interface LeftNavProps {
  content: LeftContentType
  widthContainer?: number
  currentRoute?: RoutesType
}

const LeftNav: FC<LeftNavProps> = ({
  content,
  widthContainer,
  currentRoute
}) => {
  const location = window.location.pathname;

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
          {id === 'course_content' ? (
            <div className="left-nav_item-list">
              {currentRoute && currentRoute.subRoutes?.map(({ id, path, value }) => (
                <Link key={id} to={`${path}`} className="list-item">
                  <div className="triangle"></div>
                  {value}
                </Link>
              ))}
            </div>
          ) : list && list !== [] && (
            <div className="left-nav_item-list">
              {list.map(({ id, name }) => (
                <Link key={id} to={`${id}`} className="list-item">
                  <div className="triangle"></div>
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeftNav;