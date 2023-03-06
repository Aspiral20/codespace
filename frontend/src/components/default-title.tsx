import React, { FC } from 'react';
import cn from "classnames";

interface ContextTextProps {
	children: React.ReactNode
	className?: { classNm?: string, params?: { [par: string]: boolean } }
}

const DefaultTitle: FC<ContextTextProps> = ({ children, className }) => {
	const classNm = className && className.classNm
	const params = className && className.params

	return (
		<h2 className={cn(classNm ? 'default-title ' + classNm : 'default-title', params && { ...params })}>
			{children}
		</h2>
	);
};

export default DefaultTitle;