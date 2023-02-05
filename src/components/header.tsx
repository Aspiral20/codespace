import { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from 'uuid'

interface HeaderProps {}

const menuLinks = [
  { id: uuid(), path: 'technologies', value: 'technologies' },
  { id: uuid(), path: 'settings', value: 'settings' },
  { id: uuid(), path: 'feedback', value: 'feedback' }
]

const Header: FC<HeaderProps> = () => {
  const [openLang, setOpenLang] = useState<boolean>(false);
  const { t, i18n } = useTranslation()

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
          <span className='logo-value'>Work</span><span className='logo-hover'>Space</span>
        </div>
      </Link>
      <div className="menu">
        {menuLinks.map(({ id, path, value }) => (
          <div key={id} className={'menu-item'}>
            <Link
              // to={path ? subRoutes ? path + '/' + subRoutes[0].path : path : '/'}
              to={path ? path : '/'}
              className="item"
            >
              {t(`pages.${value}`)}
            </Link>
          </div>
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
            {lang.map(lng => {
              return (
                <Fragment>
                  {lng.key !== i18n.language && <div key={lng.key} className="lng-item" onClick={() => {
                    i18n.changeLanguage(lng.key)
                    setCurrentLang(lng.lang)
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