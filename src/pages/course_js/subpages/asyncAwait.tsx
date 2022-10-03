import React, { FC, Fragment } from 'react';
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";
import { getCourseJSContent } from "../content/content_page";

interface AsyncAwaitProps {

}

const AsyncAwait: FC<AsyncAwaitProps> = ({}) => {
  const {asyncAwait}= getCourseJSContent
  return (
    <>
      {asyncAwait.page.map(content => (
        <Fragment key={content.id}>
          {content.title && <DefaultTitle>{content.title}</DefaultTitle>}
          {content.text && <DefaultText>{content.text}</DefaultText>}
          {content.code && <DefaultCode>{content.code}</DefaultCode>}
        </Fragment>
      ))}
    </>
  );
};

export default AsyncAwait;