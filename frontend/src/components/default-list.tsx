import React, { FC } from 'react';
import { listItemContent } from "../@types/tech_content.types";

interface DefaultListProps {
	list: listItemContent
	type: string
}

const DefaultList: FC<DefaultListProps> = ({
	type,
	list
}) => {
	switch (type) {
		case 'ordered':
			return (
				<div className={'default-list'}>
					{list.map(({ id, listItem }, index) => (
						<div key={id} className={'default-item'}>
							<div className="default-index">{++index}.</div>
							{listItem}
						</div>
					))}
				</div>
			)
		case 'unordered':
			return (
				<div className={'default-list'}>
					{list.map(({ id, listItem }) => (
						<div key={id} className={'default-item'}>
							<div className="default-circle"/>
							{listItem}
						</div>
					))}
				</div>
			);
		default:
			console.error(`You missed type of list, ur type: '${type}'`)
			return <></>
	}
};

export default DefaultList;