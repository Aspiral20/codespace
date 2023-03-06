import React from "react";
import { v4 as uuid } from 'uuid'

export const getSassContent = {
	sass: {
		id: uuid(),
		page: [
			{
				id: uuid(),
			},
		]
	},
	mixins: {
		id: uuid(),
		page: [
			{
				id: uuid(),
				title: <>
					Mixins
				</>
			},
		]
	},
	typography: {
		id: uuid(),
		page: [
			{
				id: uuid(),
				title: <>
					Typography
				</>
			},
		]
	},
}
