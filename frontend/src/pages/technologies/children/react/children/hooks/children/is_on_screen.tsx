import React, { FC } from 'react';
import { CourseJsContentGenerator } from "../../../../../../../components";
import { getHooksContent } from "../content_page";

interface IsOnScreenProps {

}

const IsOnScreen: FC<IsOnScreenProps> = ({}) => {
	const { is_on_screen } = getHooksContent

	return (
		<CourseJsContentGenerator field={is_on_screen}/>
	);
};

export default IsOnScreen;