export type Typename = {
	__typename: string
}

export type DocumentContentFields = {
	bold?: boolean
	text?: string
	code?: boolean
	type?: string
	children: Array<DocumentContentFields>
}

export type DocumentType = {
	type: string
	level?: number
	children: Array<DocumentContentFields>
}

export type TranslationContentType = {
	document: Array<DocumentType>
} & Typename

// LanguageType

export type LanguageType = {
	id: string
	title: string
	lang: string
} & Typename

export type LanguagesType = Array<LanguageType>

// Translations

export type TranslationType = {
	id: string
	title: string
	content: TranslationContentType
	lang: LanguageType
} & Typename

export type TranslationsType = Array<TranslationType>

// Sub Technologies

export type SubTechnologyType = {
	id: string
	title: string
	value: string
	route: string
	translations: TranslationsType
	translationsCount: number
} & Typename

export type SubTechnologiesType = Array<SubTechnologyType>

// Technologies

export type TechnologyType = {
	id: string
	title: string
	value: string
	route: string
	sub_technologies: SubTechnologiesType
	sub_technologiesCount: number
} & Typename

export type TechnologiesType = Array<TechnologyType>
