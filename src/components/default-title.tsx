import React, { FC } from 'react';

interface ContextTextProps {
  children: React.ReactNode
}

const DefaultTitle: FC<ContextTextProps> = ({children}) => {
  return (
    <h2 className={'default-title'}>
      {children}
    </h2>
  );
};

export default DefaultTitle;