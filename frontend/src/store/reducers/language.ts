import { LanguageActionType, LanguageStateType } from "../../@types/store";

const initState: LanguageStateType = {
	lng: false
}

interface ActionProps {
	type: string
}

const LanguageReducer = (state = initState, action: LanguageActionType) => {
	switch (action.type) {
		case 'OPEN':
			return { ...state, lng: true }
		case 'CLOSE':
			return { ...state, lng: false }
		case 'TOGGLE':
			return { ...state, lng: !state.lng }
		default:
			return state
	}
}

export default LanguageReducer