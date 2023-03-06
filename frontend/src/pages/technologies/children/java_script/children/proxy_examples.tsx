import React, { FC } from 'react';
import { CourseJsContentGenerator } from "../../../../../components";
import { getJavaScriptContent } from "../content_page";

interface ProxyExamplesProps {

}

const ProxyExamples: FC<ProxyExamplesProps> = () => {
	const { proxy_examples } = getJavaScriptContent
	return (
		<>
			<CourseJsContentGenerator field={proxy_examples}/>
		</>
	);
};

export default ProxyExamples;