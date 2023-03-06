import { GlobalTogglesActionType, GlobalTogglesStateType } from "../../@types/store";

const initState: GlobalTogglesStateType & { [p: string]: boolean } = {
	lang: false,
	code_type: false
}

const GlobalTogglesReducer = (state = initState, action: GlobalTogglesActionType) => {
	const { type, field } = action
	switch (type) {
		case 'close_toggles/open':
			return { ...state, [field]: true }
		case 'close_toggles/close':
			return { ...state, [field]: false }
		case 'close_toggles/toggle':
			return { ...state, [field]: !state[field] }
		default:
			return state
	}
}

export default GlobalTogglesReducer