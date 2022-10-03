import React, { FC } from 'react';

interface ContextTextProps {
  children: React.ReactNode
}

const DefaultText: FC<ContextTextProps> = ({children}) => {
  return (
    <div className={'default-text'}>
      {children}
    </div>
  );
};

export default DefaultText;