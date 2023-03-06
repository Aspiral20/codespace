import React, { FC } from 'react';
import { DocumentContentFields } from "../@types/graphql";

interface GraphqlCodeProps {
	item: DocumentContentFields
	children?: React.ReactNode
}

const GraphqlCode: FC<GraphqlCodeProps> = ({
	item,
	children
}) => {

	// regex: string.match(/^.+?(?=\\n)/)


	return (
		<>
			<div className={'default-code'}>
				{item.text}
				{/*{content.map(({ id, codeItem, className }, index) => (*/}
				{/*	<Fragment key={id}>*/}
				{/*		{noIndex*/}
				{/*			?*/}
				{/*			<div key={id} className={'code-noIndex'}>*/}
				{/*				<div className={className}>*/}
				{/*					{codeItem}*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			:*/}
				{/*			<div key={id} className={'code-indexed-row'}>*/}
				{/*				<div className="code-index">*/}
				{/*					{++index}*/}
				{/*				</div>*/}
				{/*				<div className={className}>*/}
				{/*					{codeItem}*/}
				{/*				</div>*/}
				{/*			</div>}*/}
				{/*	</Fragment>*/}
				{/*))}*/}
				{children}
			</div>
		</>
	);
};

export default GraphqlCode;
