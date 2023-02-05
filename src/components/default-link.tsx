import React, { FC } from 'react';

interface DefaultLinkProps {
  href: string
  className?: string
  value?: string | React.ReactNode
  target?: string
}

const DefaultLink: FC<DefaultLinkProps> = ({
  href,
  className,
  value,
  target
}) => {
  return (
    <a
      href={href}
      className={'my-workspace-link ' + className}
      target={target ? target : '_self'}
    >
      {value}
    </a>
  );
};

export default DefaultLink;