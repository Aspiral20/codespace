import React, { FC } from 'react';

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

const Container:FC<ContainerProps> = ({className, children}) => {
  return (
    <div className={className ? `${className} container`: 'container'}>
      {children}
    </div>
  );
};

export default Container;