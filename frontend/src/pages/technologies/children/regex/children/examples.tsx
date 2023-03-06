import React, { FC } from 'react';
import { CourseJsContentGenerator } from "../../../../../components";
import { getRegexContent } from "../content_page";

interface ExamplesProps {

}

const Examples: FC<ExamplesProps> = ({}) => {
	const { examples } = getRegexContent
	return (
		<CourseJsContentGenerator field={examples}/>
	);
};

export default Examples;