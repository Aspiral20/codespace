export type GlobalTogglesStateType = {
	lang: boolean,
	code_type: boolean
}

export type GlobalTogglesActionType = {
	type: string
	field: string
}

export type GlobalTogglesReducerType = GlobalTogglesStateType & GlobalTogglesActionType