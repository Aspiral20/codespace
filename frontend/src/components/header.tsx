import { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from 'uuid'
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { ReducersTypes } from "../@types/store";

interface HeaderProps {
}

const menuLinks = [
	{ id: uuid(), path: 'technologies', value: 'technologies' },
	{ id: uuid(), path: 'settings', value: 'settings' },
	{ id: uuid(), path: 'feedback', value: 'feedback' }
]

const Header: FC<HeaderProps> = () => {
	const dispatch = useDispatch()
	const openLang = useSelector<ReducersTypes, boolean>(state => state.close_toggles.lang)
	const { t, i18n } = useTranslation()

	const lang = [
		{ id: uuid(), key: 'ro', lang: 'RO' },
		{ id: uuid(), key: 'ru', lang: 'RU' },
		{ id: uuid(), key: 'en', lang: 'EN' }
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
				<div className="current-lang" onClick={() => dispatch({ type: 'close_toggles/open', field: 'lang' })}>
					{currentLang}
				</div>
				<div className={cn('change-lang', { active: openLang })}>
					{lang.map(lng => {
						return (
							<Fragment key={lng.id}>
								{lng.key !== i18n.language && <div key={lng.key} className="lng-item" onClick={() => {
									i18n.changeLanguage(lng.key)
									setCurrentLang(lng.lang)
								}}>
									{lng.lang}
                </div>}
							</Fragment>
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default Header;