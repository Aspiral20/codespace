import { SubTechnologiesType, TechnologiesType } from "../../@types/graphql";
import { v4 as uuid } from "uuid";

const useGetLeftContent = (field: TechnologiesType | SubTechnologiesType) => {
	try {
		const leftList = field && field.map(tech => ({ id: tech.id, value: tech.value, linkPath: tech.route }))
		return [{ id: uuid(), list: leftList }]
	} catch (e) {
		console.log(e)
	}
}

export default useGetLeftContent;