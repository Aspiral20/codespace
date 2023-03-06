import React, { FC } from 'react';
import { getJavaScriptContent } from "../content_page";
import { CourseJsContentGenerator } from "../../../../../components";

interface ClassesProps {

}

const Classes: FC<ClassesProps> = ({}) => {
	const { classes } = getJavaScriptContent
	return (
		<>
			<CourseJsContentGenerator field={classes}/>
		</>
	);
};

export default Classes;