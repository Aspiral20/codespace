import React, { FC } from 'react';
import { getJavaScriptContent } from "../content_page";
import { CourseJsContentGenerator } from "../../../../../components";

interface ClosuresProps {

}

const Closures: FC<ClosuresProps> = ({}) => {
	const { closures } = getJavaScriptContent
	return (
		<>
			<CourseJsContentGenerator field={closures}/>
		</>
	);
};

export default Closures;