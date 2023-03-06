import React from "react";
import { v4 as uuid } from 'uuid'
import { CreateJS, JsCode } from "../../../../../../components/default-code";

export const getHooksContent = {
	hooks: {
		id: 'is_on_screen',
		page: [
			{
				id: uuid(),
				title: <>
					Hooks
				</>
			},
		]
	},
	is_on_screen: {
		id: 'is_on_screen',
		//todo typescript & javascript usage

		// typescript: {
		page: [
			{
				id: uuid(),
				title: <>
					useIsOnScreen()
				</>
			},
			{
				id: uuid(),
				// text: <>Use:</>,
			},
			{
				id: uuid(),
				text: <>Use:</>,
				code: {
					content: [
						{
							id: uuid(),
							codeItem: <>
								<CreateJS>const</CreateJS> ref
								= <JsCode>useRef</JsCode>(<CreateJS>null</CreateJS>)<CreateJS>;</CreateJS>
							</>,
							className: 'code-row'
						},
						{
							id: uuid(),
							codeItem: <>
								<CreateJS>const</CreateJS> isOnScreen = <JsCode>useIsOnScreen</JsCode>(ref)
							</>,
							className: 'code-row'
						},
					],
					clipboard: 'const ref = useRef(null)\n' +
						'const isOnScreen = useIsOnScreen(ref)'
				}
			},
			{
				id: uuid(),
				code: {
					content: [
						{
							id: uuid(),
							codeItem: <>

							</>,
							className: 'code-row'
						}
					],
					clipboard: ''
				}
			},
		]
		// },
		// javascript: {
		//   page: []
		// }
	}
}