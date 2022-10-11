import React, { FC } from 'react';

interface DefaultLinkProps {
  href: string
  className?: string
  value?: string | React.ReactNode
}

const DefaultLink: FC<DefaultLinkProps> = ({
  href,
  className,
  value
}) => {
  return (
    <a href={href} className={'my-workspace-link ' + className}>
      {value}
    </a>
  );
};

export default DefaultLink;