import React, { FC } from 'react';
import { DocumentContentFields } from "../@types/graphql";
import cn from "classnames";
import { toClassTextModifier } from "../utils";
import { v4 as uuid } from 'uuid'

interface ApiUnorderedListProps {
	list?: Array<DocumentContentFields>
	type?: string
}

const ApiGraphqlList: FC<ApiUnorderedListProps> = ({
	list,
	type,
}) => {

	const classNameMin = (item: DocumentContentFields) => cn('default-text', toClassTextModifier(item))

	switch (type) {
		case 'unordered-list':
			return (
				<div className='default-item-unordered'>
					<div className="default-circle"/>
					{list && list.map(listItem => listItem.children.map(listContent => (
						<span key={uuid()} className={classNameMin(listContent)}>
							{listContent.text}
						</span>
					)))}
				</div>
			);
		case 'ordered-list':
			return (
				<div className='default-item-ordered'>
					{list && list.map(listItem => listItem.children.map(listContent => (
						<span key={uuid()} className={classNameMin(listContent)}>
							{listContent.text}
						</span>
					)))}
				</div>
			);
		default:
			return <>Invalid type list!</>
	}
};

export default ApiGraphqlList;