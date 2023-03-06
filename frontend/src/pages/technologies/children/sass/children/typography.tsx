import React, { FC } from 'react';
import { CourseJsContentGenerator } from "../../../../../components";
import { getSassContent } from "../content_page";

interface TypographyProps {

}

const Typography: FC<TypographyProps> = () => {
	const { typography } = getSassContent
	return (
		<CourseJsContentGenerator field={typography}/>
	);
};

export default Typography;