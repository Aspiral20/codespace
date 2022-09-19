import React, { FC } from 'react';
import cn from "classnames";
import { Link } from "react-router-dom";

interface NotFoundProps {

}

const NotFound: FC<NotFoundProps> = ({}) => {
  return (
    <div className={cn("not-found")}>
      <div className="error-status">
        404
      </div>
      <div className="error-description">
        Aceasta pagina nu exista. Treceti <Link to={'/'}>Home</Link>
      </div>
    </div>
  );
};

export default NotFound;