import { FC, Fragment, useState } from "react";
import { Link, Outlet, useRoutes } from "react-router-dom";
import { getRouter } from "../conf/RouteElements";
import cn from 'classnames';
import { setterLang } from "../optimized/functions";

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({}) => {
  const [openLang, setOpenLang] = useState<boolean>(false);

  const lang = [
    { key: 'ro', lang: 'RO' },
    { key: 'ru', lang: 'RU' },
    { key: 'en', lang: 'EN' }
  ]
  const [currentLang, setCurrentLang] = useState(lang[0].lang);

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
          <Fragment key={id}>
            {value !== '' ? <Link key={id} to={path ? subRoutes ? path + '/' + subRoutes[0].path : path : '/'}>
              <div className={cn('item')}>{value}</div>
            </Link> : null}
          </Fragment>
        ))}
      </div>
      <div className={'language'}>
        <div className="current-lang" onClick={() => {
          setOpenLang(prevState => !prevState)
        }}>
          {currentLang}
        </div>
        {openLang &&
          <div className={'change-lang'}>
            {lang.map(lng => (
              <div key={lng.key} className="lng-item" onClick={() => setCurrentLang(lng.lang)}>
                {lng.lang !== currentLang && lng.lang}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Header;