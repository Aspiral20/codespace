import React, { FC } from 'react';
import { LeftContentType } from "../@types/course_js/leftContent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";
import useStringPath from "../hooks/useStringPath";
import { BackArrow } from "./images";
import { useTranslation } from "react-i18next";

interface LeftNavProps {
  content: LeftContentType
  widthContainer?: number
  navArrowsLinks?: {
    backNavLink: string,
    forwardNavLink: string
  }
}

const LeftNav: FC<LeftNavProps> = ({
  content,
  widthContainer,
  navArrowsLinks
}) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const { lastChildPath } = useStringPath(pathname)
  const navigate = useNavigate();

  return (
    <div className={'left-nav'} style={{ width: widthContainer }}>
      {navArrowsLinks && <div className="nav_arrow_container">
        <BackArrow onClick={() => navigate(parseInt(navArrowsLinks.backNavLink))} className="left-nav_back-arrow-svg"/>
        <div className="nav_text">{t('actions.navigation')}</div>
        <BackArrow onClick={() => navigate(parseInt(navArrowsLinks.forwardNavLink))} className="left-nav_forward-arrow-svg"/>
      </div>}
      {content && content.map(({ id, title, text, list }) => (
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
              {list.map(({ id, linkPath, value }) => (
                <Link key={id} to={`${linkPath}`} className={cn("list-item", { 'active': lastChildPath === linkPath })}>
                  <div className="triangle"/>
                  {value}
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