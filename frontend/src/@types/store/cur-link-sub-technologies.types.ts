export type CurLinkSubTechnologiesStateType = {
	sub_technology: string
}

export type CurLinkSubTechnologiesActionType = {
	type: string
	field: string
	value: number
}

export type CurLinkSubTechnologiesReducerType = CurLinkSubTechnologiesStateType & CurLinkSubTechnologiesActionType