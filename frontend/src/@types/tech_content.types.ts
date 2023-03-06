import React from "react";

export type CodeType = {
	content: codeItemContent,
	clipboard?: string,
	noIndex?: boolean
}
export type ListType = {
	content: listItemContent
	unordered?: boolean
	ordered?: boolean
}

export type CodeItemType = {
	id: number | string,
	codeItem: React.ReactNode,
	className: string,
	noIndex?: boolean
}
export type ListItemType = {
	id: number | string,
	listItem: React.ReactNode
}
export type codeItemContent = Array<CodeItemType>
export type listItemContent = Array<ListItemType>

export type contentPageType = {
	id: number | string
	title?: React.ReactNode
	text?: React.ReactNode
	code?: CodeType
	list?: ListType
}

export type courseJsContentGeneratorProps = {
	field: {
		id: string
		page: Array<contentPageType>
	}
}
export type techContentType = {
	[p: string]: {
		id: string
		page: Array<contentPageType>
	}
}