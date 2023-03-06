import { DocumentContentFields } from "../@types/graphql";
import { GraphqlTextMods } from "../constants";

const toClassTextModifier = (childrenItem: DocumentContentFields) => {
	let paramsClasses = {}
	const childrenItemKeys = Object.keys(childrenItem)

	if (childrenItemKeys.length > 0) {
		childrenItemKeys.forEach(item => GraphqlTextMods.forEach(modItem => item === modItem ?
			paramsClasses = {
				...paramsClasses,
				[`text_${item}`]: true
			} :
			null))
	}

	return paramsClasses
}

export default toClassTextModifier