import React, { FC } from 'react';
import cn from "classnames";
import { CourseJsContentGenerator } from "../../../../components";
import { getSassContent } from "./content_page";
import { LeftContentType } from "../../../../@types/technologies/left_content.types";
import { v4 as uuid } from "uuid";
import LeftNav from "../../../../components/left-nav";
import { Outlet, useLocation } from "react-router-dom";
import useStringPath from "../../../../hooks/device/useStringPath";

const leftContent: LeftContentType = [
	{
		id: 'sass',
		list: [
			{ id: uuid(), linkPath: 'mixins', value: 'Mixins' },
			{ id: uuid(), linkPath: 'typography', value: 'Typography' },
		],
	},
]

interface SassProps {
}

const Sass: FC<SassProps> = () => {
	const { pathname } = useLocation()
	const { lastChildPath } = useStringPath(pathname)
	const { sass } = getSassContent
	return (
		<div className={cn('course_js')}>
			<LeftNav
				content={leftContent}
				widthContainer={220}
				navArrowsLinks={{ backNavLink: '-1', forwardNavLink: '1' }}
			/>
			<div className="HCJS-content">
				<h2 className="content_title">
					Sass
				</h2>
				{lastChildPath === 'sass' ? (
					<CourseJsContentGenerator field={sass}/>
				) : (
					<Outlet/>
				)}
			</div>
		</div>
	);
};

export default Sass;