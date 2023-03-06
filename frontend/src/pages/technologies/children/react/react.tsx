import React, { FC } from 'react';
import cn from "classnames";
import LeftNav from "../../../../components/left-nav";
import { Outlet, useLocation } from "react-router-dom";
import { LeftContentType } from "../../../../@types/technologies/left_content.types";
import { v4 as uuid } from 'uuid'
import useStringPath from "../../../../hooks/device/useStringPath";
import { CourseJsContentGenerator } from "../../../../components";
import { getReactContent } from "./content_page";
import CodeType from "../../../../components/code-type";

const leftContent: LeftContentType = [
	{
		id: 'java_script',
		list: [
			{ id: uuid(), linkPath: 'hooks', value: 'Hooks' }
		],
	},
]

interface ReactProps {
}

const ReactPage: FC<ReactProps> = () => {
	const { react } = getReactContent
	const { pathname } = useLocation()
	const { lastChildPath } = useStringPath(pathname)

	return (
		<>
			{lastChildPath === 'react' ? (
				<div className={cn('course_js')}>
					<LeftNav
						content={leftContent}
						widthContainer={220}
						navArrowsLinks={{ backNavLink: '-1', forwardNavLink: '1' }}
					/>
					<div className="HCJS-content">
						<h2 className="content_title">
							React
						</h2>
						<CodeType/>
						<CourseJsContentGenerator field={react}/>
					</div>
				</div>
			) : (
				<Outlet context={{ CodeTypeElem: <CodeType/> }}/>
			)}
		</>
	);
};

export default ReactPage;