import React, { FC } from 'react';
import cn from "classnames";
import LeftNav from "../../../../components/left-nav";
import { Outlet, useLocation } from "react-router-dom";
import { LeftContentType } from "../../../../@types/technologies/left_content.types";
import useStringPath from "../../../../hooks/device/useStringPath";
import { CourseJsContentGenerator } from "../../../../components";
import { getReduxContent } from "./content_page";

const leftContent: LeftContentType = [
	{
		id: 'redux',
		list: [],
	},
]

const Redux: FC = () => {
	const { redux } = getReduxContent
	const { pathname } = useLocation()
	const { lastChildPath } = useStringPath(pathname)
	return (
		<>
			{lastChildPath === 'redux' ? (
				<div className={cn('course_js')}>
					<LeftNav
						content={leftContent}
						widthContainer={220}
						navArrowsLinks={{ backNavLink: '-1', forwardNavLink: '1' }}
					/>
					<div className="HCJS-content">
						<h2 className="content_title">
							Redux
						</h2>
						<CourseJsContentGenerator field={redux}/>
					</div>
				</div>
			) : (
				<Outlet/>
			)}
		</>
	);
};

export default Redux;