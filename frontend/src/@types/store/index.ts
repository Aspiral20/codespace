import { LanguageReducerType } from "./language.types";
import { ReactTypeReducerType } from "./react-type.types";
import { GlobalTogglesReducerType } from "./global-toggles.types";
import { CurLinkSubTechnologiesReducerType } from "./cur-link-sub-technologies.types";

export type ReducersTypes = {
	lang: LanguageReducerType
	type_icon: ReactTypeReducerType
	close_toggles: GlobalTogglesReducerType
	cur_link_sub_technologies: CurLinkSubTechnologiesReducerType
}

export * from './react-type.types'
export * from './language.types'
export * from './global-toggles.types'
export * from './cur-link-sub-technologies.types'