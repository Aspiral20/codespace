import React, { FC } from 'react';
import { LeftContentType } from "../types/course_js/leftContent";

interface LeftNavProps {
  content: LeftContentType,
  widthContainer?: number
}

const LeftNav: FC<LeftNavProps> = ({ content, widthContainer }) => {
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
              {list.map(({ id, name }) => {
                return (
                  <div key={id} className="list-item">
                    <div className="triangle"></div>
                    {name}
                  </div>
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