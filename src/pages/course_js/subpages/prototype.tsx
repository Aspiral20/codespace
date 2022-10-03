import React, { FC, Fragment } from 'react';
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";
import { getCourseJSContent } from "../content/content_page";

interface PrototypeProps {

}

const Prototype: FC<PrototypeProps> = ({}) => {
  const { prototype } = getCourseJSContent

  return (
    <>
      {prototype.page.map(content => (
        <Fragment key={content.id}>
          {content.title && <DefaultTitle>{content.title}</DefaultTitle>}
          {content.text && <DefaultText>{content.text}</DefaultText>}
          {content.code && <DefaultCode clipboard={content && content.clipboard ? content.clipboard : ''}>{content.code}</DefaultCode>}
        </Fragment>
      ))}
    </>
  );
};

export default Prototype;