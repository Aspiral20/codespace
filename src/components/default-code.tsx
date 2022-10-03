import React, { FC, useState } from 'react';


interface ContextTextProps {
  children: React.ReactNode
}

interface ClipboardProps {
  clipboard?: string
}

export const JsCode: FC<ContextTextProps> = ({ children }) => (
  <span className={'js-code'}>{children}</span>
)

export const ObjectField: FC<ContextTextProps> = ({ children }) => (
  <span className={'object-field'}>{children}</span>
)

export const Commentaries: FC<ContextTextProps> = ({ children }) => (
  <span className={'commentaries'}>{children}</span>
)


const DefaultCode: FC<ContextTextProps & ClipboardProps> = ({ children, clipboard }) => {
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
        {children}
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
