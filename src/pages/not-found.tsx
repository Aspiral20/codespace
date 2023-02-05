import React, { FC } from 'react';
import cn from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface NotFoundProps {

}

const NotFound: FC<NotFoundProps> = () => {
  const { t } = useTranslation()
  return (
    <div className={cn("not-found")}>
      <div className="not-found-container">
        <div className="error-status">
          404
        </div>
        <div className="error-description">
          {t('errors.not-found')} {t('errors.not-found-link')}&nbsp;
          <Link className="link" to={'/'}>
            {t('errors.not-found-path')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;