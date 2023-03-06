import { v4 as uuid } from 'uuid'
import React from "react";
import { techContentType } from "../../@types/tech_content.types";

export const getTechContent: techContentType = {
	technologies: {
		id: uuid(),
		page: [
			{
				id: uuid(),
			}
		]
	}
}