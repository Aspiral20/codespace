import React, { FC } from 'react';
import { useLocation } from "react-router-dom";
import useStringPath from "../hooks/device/useStringPath";
import cn from "classnames";
import LeftNav from "./left-nav";
import { CourseJsContentGenerator, GraphqlContentGenerator } from "./index";
import { TechnologyType } from "../@types/graphql";
import { useGetLeftContent } from "../hooks/device";
import { useQuery } from "@apollo/client";
import { GET_TECHNOLOGY } from "../graphql";
import { getJavaScriptContent } from "../pages/technologies/children/java_script/content_page";
import { useSelector } from "react-redux";
import { ReducersTypes } from "../@types/store";
import useCoreTranslation from "../hooks/translation/useCoreTranslation";

interface SubTechnologiesProps {

}

const SubTechnologies: FC<SubTechnologiesProps> = ({}) => {
	const { pathname } = useLocation()
	const { lastChildPath } = useStringPath(pathname)
	const { java_script } = getJavaScriptContent

	// Res API
	const { loading, data } = useQuery(GET_TECHNOLOGY, { variables: { name: lastChildPath } })

	// From API
	const subTechnology: TechnologyType = data && data.technologies[0]
	const subTechnologies = subTechnology && subTechnology.sub_technologies
	const leftContent = useGetLeftContent(subTechnologies)

	const techValue = useSelector<ReducersTypes, string>(state => state.cur_link_sub_technologies.sub_technology)

	const findSubTech = subTechnologies && subTechnologies.find(item => techValue.includes(item.route))

	const subTechTranslation = useCoreTranslation(findSubTech && findSubTech.translations)
	// console.log({ subTechnology, subTechnologies, findSubTech, techValue, subTechTranslation })

	return (
		<div className={cn('course_js')}>
			<LeftNav
				content={leftContent || []}
				loading={loading}
				widthContainer={220}
				navArrowsLinks={{ backNavLink: '-1', forwardNavLink: '1' }}
				storeValue={true}
			/>
			<div className="HCJS-content">
				{!loading ? (
					<>
						<h2 className="content_title">
							{subTechnology && subTechnology.title}
						</h2>
						{techValue === '' ? (
							<CourseJsContentGenerator
								field={java_script}
							/>
						) : (
							<GraphqlContentGenerator
								data={subTechTranslation}
							/>
						)}
					</>
				) : <>Loading...</>}
			</div>
		</div>
	);
};

export default SubTechnologies;