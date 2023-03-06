import React, { FC, Fragment, useEffect, useState } from 'react';
import { JavaScript, TypeScript } from "./images";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { ReducersTypes } from "../@types/store";
import cn from "classnames";

type CodeTypeField = {
	id: string
	element: React.ReactNode
	code_type: string
}

type CodeTypesType = {
	typescript: CodeTypeField
	javascript: CodeTypeField
}

const CodeType: FC = () => {
	const toggleType = useSelector<ReducersTypes, boolean>(state => state.close_toggles.code_type)
	const getCodeType = useSelector<ReducersTypes, string>(state => state.type_icon.code_type)
	const dispatch = useDispatch()

	const changeReduxType = (e: any) => {
		dispatch({ type: `change/${e.currentTarget.id}` })
	}

	const codeTypes: { [p: string]: CodeTypeField } & CodeTypesType = {
		typescript: {
			id: uuid(),
			element: <TypeScript id="typescript" onClick={changeReduxType} className="type_changer"/>,
			code_type: 'typescript'
		},
		javascript: {
			id: uuid(),
			element: <JavaScript id="javascript" className="type_changer" onClick={changeReduxType}/>,
			code_type: 'javascript'
		}
	}
	const [currTypeElem, setCurrTypeElem] = useState<React.ReactNode>(<></>)

	useEffect(() => {
		setCurrTypeElem(codeTypes[getCodeType].element)
	}, [getCodeType])

	return (
		<div className="code_type">
			<div className="current_type" onClick={() => dispatch({ type: 'close_toggles/open', field: 'code_type' })}>
				{currTypeElem}
			</div>
			<div className={cn("types_container", { active: toggleType })}>
				{Object.values(codeTypes).map(({ id, element, code_type }) => (
					<Fragment key={id}>
						{code_type !== getCodeType ? element : <></>}
					</Fragment>)
				)}
			</div>
		</div>
	);
};

export default CodeType;