import { v4 as uuid } from 'uuid'
import React from "react";

export const getReduxContent = {
	redux: {
		id: uuid(),
		page: [
			{
				id: uuid(),
				page: [
					{
						id: uuid(),
						title: <>
							Redux <a className="link-info" href="https://redux.js.org/introduction/getting-started" target="_blank"
							         rel="noreferrer">documentation</a>.
						</>
					},
				]
			},
		]
	},
}
