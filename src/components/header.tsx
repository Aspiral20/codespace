import React, { FC, useEffect } from 'react';
import { Link, Outlet, useRoutes } from "react-router-dom";
import { getRouter } from "../conf/RouteElements";
import cn from 'classnames';

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({}) => {
  const pathname = window.location.pathname

  return (
    <div className='header'>
      <Link to={'/'}>
        <div className="logo">
          <span className='logo-value'>Java</span><span className='logo-hover'>Script</span><span
          className="logo-domain">HC</span>
        </div>
      </Link>
      <div className="menu">
        {getRouter.map(({ id, path, value, index, subRoutes }) => (
          <>
            <Link key={id} to={path ? path : '/'}>
              <div className={cn('item', { active: path && pathname.includes(path) })}>{value}</div>
            </Link>
            {/*<div className="open_subRouter_menu active">*/}
            {/*  {subRoutes ? subRoutes.map(subRouter => (*/}
            {/*    <>*/}
            {/*      <Link key={subRouter.id} to={path + '/' + subRouter.path}>*/}
            {/*        <div className={cn('item', {active: pathname.includes(path)})}>{subRouter.value}</div>*/}
            {/*      </Link>*/}
            {/*    </>*/}
            {/*  )) : null}*/}
            {/*</div>*/}
          </>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Header;