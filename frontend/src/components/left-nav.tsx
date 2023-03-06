import React, { FC, useEffect, useState } from 'react';
import { LeftContentType } from "../@types/technologies/left_content.types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";
import useStringPath from "../hooks/device/useStringPath";
import { BackArrow } from "./images";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ReducersTypes } from "../@types/store";
// import { v4 as uuid } from 'uuid'

// Ex. usage
// export const leftContentExample: LeftContentType = [
// 	{
// 		id: 'java_script',
// 		list: [
// 			{ id: uuid(), linkPath: 'path1', value: 'value1' },
// 			{ id: uuid(), linkPath: 'path2', value: 'value2' },
// 			{ id: uuid(), linkPath: 'path3', value: 'value3' },
// 		],
// 	},
// 	{
// 		id: 'description1',
// 		text: [
// 			{ id: 'text-test1',
// 				content: <>
// 					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut, consectetur cupiditate, doloribus
// 					et explicabo fugiat fugit iusto nisi nobis pariatur perferendis quasi quod sapiente sed sunt suscipit tempore
// 					voluptatibus.
// 				</>
// 			},
// 			{ id: 'text-test2', content: 'sdsds' },
// 			{ id: 'text-test3', content: 'sdsds' },
// 		],
// 	},
// ]

interface LeftNavProps {
	content: LeftContentType
	loading?: boolean
	widthContainer?: number
	navArrowsLinks?: {
		backNavLink: string,
		forwardNavLink: string
	}
	storeValue?: boolean
}

const LeftNav: FC<LeftNavProps> = ({
	content,
	loading = false,
	widthContainer,
	navArrowsLinks,
	storeValue = false
}) => {
	const { t } = useTranslation()
	const { pathname } = useLocation()
	const { lastChildPath } = useStringPath(pathname)
	const navigate = useNavigate()
	const [] = useState()

	const storeGetSubTechnologyValue = useSelector<ReducersTypes, string>(state => state.cur_link_sub_technologies.sub_technology)
	const dispatch = useDispatch()

	useEffect(() => {

	}, [storeGetSubTechnologyValue])

	return (
		<div className={'left-nav'} style={{ width: widthContainer }}>
			{!loading ? (
				<>
					{navArrowsLinks && <div className="nav_arrow_container">
            <BackArrow
              onClick={() => navigate(parseInt(navArrowsLinks.backNavLink))}
              className="left-nav_back-arrow-svg"
            />
            <div className="nav_text">
							{t('actions.navigation')}
            </div>
            <BackArrow
              onClick={() => navigate(parseInt(navArrowsLinks.forwardNavLink))}
              className="left-nav_forward-arrow-svg"
            />
          </div>}
					{content && content.map(({ id, title, text, list }) => (
						<div key={id} className="left-nav_item">
							{title && title !== '' && (
								<div className="title">
									{title}
								</div>
							)}
							{text && (
								<div className="left-nav_item-text">
									{text.map(({ id, content }) => (
										<div key={id} className="text-item">
											{content}
										</div>
									))}
								</div>
							)}
							{list && (
								<div className="left-nav_item-list">
									{list.map(({ id, linkPath, value }) => !storeValue ? (linkPath !== '' || value !== '') && (
										<Link
											key={id}
											to={`${linkPath}`}
											className={cn("list-item", { 'active': lastChildPath === linkPath })}
										>
											<div className="triangle"/>
											{value}
										</Link>
									) : (
										<div
											key={id}
											className={cn("list-item", { 'active': storeGetSubTechnologyValue.includes(linkPath) })}
											onClick={() => dispatch({
												type: 'change',
												field: "sub_technology",
												value: `${lastChildPath}.${linkPath}`
											})}
										>
											<div className="triangle"/>
											{value}
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</>
			) : <>Loading...</>}
		</div>
	);
};

export default LeftNav;