import React, { FC, Fragment, useState } from 'react';
import { TranslationType } from "../@types/graphql";
import { ApiGraphqlList, DefaultText, DefaultTitle } from "./index";
import { v4 as uuid } from 'uuid'
import { toClassTextModifier } from "../utils";
import GraphqlCode from "./graphql-code";

interface GraphqlContentGeneratorProps {
	data?: TranslationType
}

const GraphqlContentGenerator: FC<GraphqlContentGeneratorProps> = ({ data }) => {
	const content = data && data.content
	const [copyClipboard, setCopyClipboard] = useState<boolean>(false);

	const copyToClipboard = (str: string | undefined) => {
		const el = document.createElement('textarea');
		if (str) {
			el.value = str;
			el.setAttribute('readonly', '');
			el.style.position = 'absolute';
			el.style.left = '-9999px';
			document.body.appendChild(el);
			el.select();
			document.execCommand('copy');
			document.body.removeChild(el);
		}
	};
	console.log(content)

	return (
		<>
			{content && content.document.map(contentItem => (
				<Fragment key={uuid()}>
					{(contentItem.children.length && contentItem.children.every(el => el.text !== '')) && (
						<>
							{contentItem.type === 'heading' && (
								contentItem.children.map(childrenItem => {
									return (
										<DefaultTitle
											key={uuid()}
											className={{ classNm: "graphql_content", params: toClassTextModifier(childrenItem) }}
										>
											{childrenItem.text}
										</DefaultTitle>
									)
								})
							)}
							{contentItem.type === 'paragraph' && (
								<p className="graphql_content default-paragraph">
									{contentItem.children.map(childrenItem => (
										<DefaultText
											key={uuid()}
											className={{ params: toClassTextModifier(childrenItem) }}
											type="paragraph"
										>
											{childrenItem.text}
										</DefaultText>
									))}
								</p>
							)}
							{contentItem.type === 'unordered-list' && (
								<div className='graphql_content default-list'>
									{contentItem.children.map(childrenItem => (
										<ApiGraphqlList
											key={uuid()}
											type={contentItem.type}
											list={childrenItem.children}
										/>
									))}
								</div>
							)}
							{contentItem.type === 'code' && (
								<div className="graphql_content default-code">
									{contentItem.children.map(childrenItem => (
										<GraphqlCode key={uuid()} item={childrenItem}>
											{/*{clipboard && <div className="copy" onClick={() => {*/}
											{/*	setCopyClipboard(true)*/}
											{/*	setTimeout(() => setCopyClipboard(false), 3000)*/}
											{/*	copyToClipboard(clipboard)*/}
											{/*}}>*/}
											{/*	{!copyClipboard ? 'Copy' : 'Copied!'}*/}
											{/*</div>}*/}
										</GraphqlCode>
									))}
								</div>
							)}
						</>
					)}
				</Fragment>
			))}
		</>)
};

export default GraphqlContentGenerator;