import React, { FC } from 'react';
import LeftNav from "../../components/left-nav";
import cn from "classnames";
import { LeftContentType } from "../../@types/technologies/left_content.types";
import { CourseJsContentGenerator, ErrorInternalServer } from "../../components";
import { getTechContent } from "./content_page";
import { Outlet, useLocation } from "react-router-dom";
import useStringPath from "../../hooks/device/useStringPath";
import { useQuery } from "@apollo/client";
import { GET_ONLY_TECHNOLOGIES } from "../../graphql";
import { TechnologiesType } from "../../@types/graphql";
import { useGetLeftContent } from "../../hooks/device";

export const techLeftContent: LeftContentType = [
	// {
	//   id: 'description1',
	//   text: [
	//     {id: 'text-test1', content: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut, consectetur cupiditate, doloribus et explicabo fugiat fugit iusto nisi nobis pariatur perferendis quasi quod sapiente sed sunt suscipit tempore voluptatibus.</>},
	//     {id: 'text-test2', content: 'sdsds'},
	//     {id: 'text-test3', content: 'sdsds'},
	//   ],
	// },
]

interface TechnologiesProps {
	children?: React.ReactNode,
}

const Technologies: FC<TechnologiesProps> = () => {
	const { pathname } = useLocation()
	const { lastChildPath } = useStringPath(pathname)
	const { [lastChildPath]: field } = getTechContent

	// Res API
	const { loading, error, data } = useQuery(GET_ONLY_TECHNOLOGIES)

	// From API
	const technologies: TechnologiesType = data && data.technologies
	const leftContent = useGetLeftContent(technologies)

	return (
		<>
			{!loading ?
				<>
					{!error ? (
						<>
							{lastChildPath === 'technologies' ? (
								<div className={cn('course_js')}>
									<LeftNav
										content={leftContent || []}
										loading={loading}
										widthContainer={220}
										navArrowsLinks={{ backNavLink: '-1', forwardNavLink: '1' }}
									/>
									<div className="HCJS-content">
										<h2 className="content_title">
											Technologies
										</h2>
										<CourseJsContentGenerator field={field}/>
									</div>
								</div>
							) : (
								<Outlet/>
							)}
						</>
					) : (
						<ErrorInternalServer/>
					)}
				</> :
				<>Loading...</>}
		</>
	)
};

export default Technologies;