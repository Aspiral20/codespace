import React, { FC } from 'react';
import { getJavaScriptContent, } from "../content_page";
import { CourseJsContentGenerator } from "../../../../../components";

interface PrototypeProps {

}

const Prototype: FC<PrototypeProps> = ({}) => {
	const { prototype } = getJavaScriptContent
	return (
		<>
			<CourseJsContentGenerator field={prototype}/>
		</>
	);
};

export default Prototype;