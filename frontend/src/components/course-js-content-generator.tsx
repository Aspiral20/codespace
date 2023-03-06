import React, { FC, Fragment } from 'react';
import { courseJsContentGeneratorProps } from "../@types/tech_content.types";
import { DefaultCode, DefaultText, DefaultTitle } from "./index";
import DefaultList from "./default-list";

export const CourseJsContentGenerator: FC<courseJsContentGeneratorProps> = ({ field }) => {
	return (
		<>
			{field && field.page.map(fieldItem => (
				<Fragment key={fieldItem.id}>
					{fieldItem.title && <DefaultTitle>{fieldItem.title}</DefaultTitle>}
					{fieldItem.text && <DefaultText>{fieldItem.text}</DefaultText>}
					{fieldItem.code && fieldItem.code.content &&
            <DefaultCode
              clipboard={fieldItem.code.clipboard ? fieldItem.code.clipboard : ''}
              content={fieldItem.code.content}
              noIndex={fieldItem.code.noIndex}
            />
					}
					{fieldItem.list?.content &&
            <DefaultList
              list={fieldItem.list.content}
              type={fieldItem.list.unordered ? 'unordered' : fieldItem.list.ordered ? 'ordered' : 'error-type'}
            />
					}
				</Fragment>
			))}
		</>
	)
}

export default CourseJsContentGenerator;