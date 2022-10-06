import React, { FC, useState } from 'react';
import { codeItemContent } from "../pages/course_js/content/content_page";


interface ContextTextProps {
  children: React.ReactNode,
  mode?: string
}

interface DefaultCodeProps {
  clipboard?: string
  codeContent: codeItemContent
}

export const CreateJS: FC<ContextTextProps> = ({ children,mode }) => (
  <span className={'create-js'} style={{fontStyle: mode}}>{children}</span>
)

export const JsCode: FC<ContextTextProps> = ({ children,mode }) => (
  <span className={'js-code'} style={{fontStyle: mode}}>{children}</span>
)

export const ObjectField: FC<ContextTextProps> = ({ children, mode }) => (
  <span className={'object-field'} style={{fontStyle: mode}}>{children}</span>
)

export const Numbers: FC<ContextTextProps> = ({ children,mode }) => (
  <span className={'numbers'} style={{fontStyle: mode}}>{children}</span>
)

export const Commentaries: FC<ContextTextProps> = ({ children,mode }) => (
  <span className={'commentaries'} style={{fontStyle: mode}}>{children}</span>
)

const DefaultCode: FC<DefaultCodeProps> = ({
  clipboard,
  codeContent
}) => {
  const [copyClipboard, setCopyClipboard] = useState<boolean>(false);

  const copyToClipboard = (str: string | undefined) => {
    const el = document.createElement('textarea');
    if (str) {
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  };

  return (
    <>
      <div className={'default-code'}>
        {codeContent.map(({ id, codeItem , className }, index) => (
          <div key={id} className={'code-indexed-row'}>
            <div className="code-index">
              {++index}
            </div>
            <div  className={className}>
              {codeItem}
            </div>
          </div>
        ))}
        {clipboard && <div className="copy" onClick={() => {
          setCopyClipboard(true)
          setTimeout(() => setCopyClipboard(false), 3000)
          copyToClipboard(clipboard)
        }}>
          {!copyClipboard ? 'Copy' : 'Copied!'}
        </div>}
      </div>
    </>
  );
};

export default DefaultCode;
