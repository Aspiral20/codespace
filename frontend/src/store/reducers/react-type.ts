import { ReactTypeActionType, ReactTypeStateType } from "../../@types/store";

const initState: ReactTypeStateType = {
	code_type: 'typescript'
}

export default function ReactTypeReducer(state = initState, action: ReactTypeActionType) {
	const { type } = action
	switch (type) {
		case 'change/typescript':
			return { ...state, code_type: 'typescript' }
		case 'change/javascript':
			return { ...state, code_type: 'javascript' }
		default:
			return state
	}
}