import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ExceptionsContainer } from "../components";

interface NotFoundProps {

}

const NotFound: FC<NotFoundProps> = () => {
	const { t } = useTranslation()
	return (
		<ExceptionsContainer
			className={"not-found"}
			status={404}
		>
			{t('errors.not-found')} {t('errors.not-found-link')}&nbsp;
			<Link className="link" to={'/'}>
				{t('errors.not-found-path')}
			</Link>
		</ExceptionsContainer>
	);
};

export default NotFound;