import { CurLinkSubTechnologiesActionType, CurLinkSubTechnologiesStateType } from "../../@types/store";

const initState: CurLinkSubTechnologiesStateType & { [p: string]: string } = {
	sub_technology: ''
}

const CurLinkSubTechnologies = (state = initState, action: CurLinkSubTechnologiesActionType) => {
	const { type, field, value } = action
	switch (type) {
		case 'change':
			return { ...state, [field]: value }
		default:
			return state
	}
}

export default CurLinkSubTechnologies