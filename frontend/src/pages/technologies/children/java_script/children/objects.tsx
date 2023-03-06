import React, { FC } from 'react';
import { getJavaScriptContent } from "../content_page";
import { CourseJsContentGenerator } from "../../../../../components";

interface ObjectsProps {

}

const Objects: FC<ObjectsProps> = ({}) => {
	const { objects } = getJavaScriptContent
	return (
		<>
			<CourseJsContentGenerator field={objects}/>
		</>
	);
};

export default Objects;