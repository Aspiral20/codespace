import React, { FC } from 'react';
import cn from "classnames";

interface ExceptionsContainerProps {
	className?: string
	children?: React.ReactNode
	cnProps?: { [p: string]: boolean }
	status?: string | number
}

const ExceptionsContainer: FC<ExceptionsContainerProps> = ({
	className,
	children,
	cnProps,
	status,
}) => {
	return (
		<div className={cn("exceptions " + className, { ...cnProps })}>
			<div className="exceptions-container">
				<div className="error-status">
					{status}
				</div>
				<div className="error-description">
					{children}
				</div>
			</div>
		</div>
	);
};

export default ExceptionsContainer;