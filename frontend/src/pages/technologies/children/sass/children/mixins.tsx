import React, { FC } from 'react';
import { CourseJsContentGenerator } from "../../../../../components";
import { getSassContent } from "../content_page";

interface MixinsProps {

}

const Mixins: FC<MixinsProps> = () => {
	const { mixins } = getSassContent
	return (
		<CourseJsContentGenerator field={mixins}/>
	);
};

export default Mixins;