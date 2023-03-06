import React, { FC } from 'react';
import cn from "classnames";

interface ContextTextProps {
	children?: React.ReactNode
	className?: { classNm?: string, params?: { [par: string]: boolean } }
	type?: string
}

const DefaultText: FC<ContextTextProps> = ({ children, className, type }) => {
	const classNm = className && className.classNm
	const params = className && className.params

	const classNameMin = () => cn(classNm ? 'default-text ' + classNm : 'default-text', params && { ...params })

	return (
		<>
			{type && type === 'paragraph' ? (
				<span className={classNameMin()}>
					{children}
				</span>
			) : (
				<div className={classNameMin()}>
					{children}
				</div>
			)}
		</>
	);
};

export default DefaultText;