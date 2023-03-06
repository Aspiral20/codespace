import React, { FC } from 'react';
import ExceptionsContainer from "./exceptions-container";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ErrorProps {
}

const ErrorInternalServer: FC<ErrorProps> = ({}) => {
	const { t } = useTranslation()
	return (
		<ExceptionsContainer
			className="server-error"
			status={500}
		>
			<>
				{t('errors.internal-server')}. {t('errors.not-found-link')}&nbsp;
				<Link className="link" to={'/'}>
					{t('errors.not-found-path')}
				</Link>
			</>
		</ExceptionsContainer>
	);
};

export default ErrorInternalServer;