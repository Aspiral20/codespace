import { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { getRouter } from "../conf/RouteElements";
import cn from 'classnames';
import { useTranslation } from "react-i18next";

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({}) => {
  const [openLang, setOpenLang] = useState<boolean>(false);
  const {t, i18n} = useTranslation()

  console.log(i18n.language)

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
            {value !== '' ?
              <div key={id} className={cn('menu-item')}>
                <Link
                  to={path ? subRoutes ? path + '/' + subRoutes[0].path : path : '/'}
                  className="item"
                >
                  {t(`pages.${id}`)}
                </Link>
              </div>
              : null}
          </Fragment>
        ))}
      </div>
      <div className={'language'}>
        <div className="current-lang" onClick={() => {
          setOpenLang(prevState => !prevState)
        }}>
          {i18n.language}
        </div>
        {openLang &&
          <div className={'change-lang'}>
            {lang.map(lng => {
              return (
                <Fragment>
                  {lng.key !== i18n.language && <div key={lng.key} className="lng-item" onClick={() => {
                    i18n.changeLanguage(lng.key)
                    setOpenLang(false)
                  }}>
                    {lng.lang}
                  </div>}
                </Fragment>
              )
            })}
          </div>
        }
      </div>
    </div>
  );
};

export default Header;