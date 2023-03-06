export type LanguageStateType = {
	lng: boolean
}

export type LanguageActionType = {
	type: string
}

export type LanguageReducerType = LanguageStateType & LanguageActionType