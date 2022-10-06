import React, { FC, Fragment } from 'react';
import cn from "classnames";
import { PHPStorm, Vscode } from "../../components";
import DownloadSettings from "../../components/download-settings";

interface SettingsProps {
  children?: React.ReactNode
}


const Settings: FC<SettingsProps> = ({ children }) => {


  const rightCards = [
    {
      logo: <PHPStorm className={'phpstorm-svg'}/>,
      logoName: 'PHPStorm',
      children: <>
        <DownloadSettings
          infoSetting={'Full settings'}
          downloadLink={'settings/phpstorm_full.zip'}
          infoLink={' phpstorm_full.zip'}
        />
        <DownloadSettings
          infoSetting={'Templates settings'}
          downloadLink={'settings/phpstorm_templates.zip'}
          infoLink={'phpstorm_templates.zip'}
        />
      </>
    },
    {
      logo: <Vscode className={'vscode-svg'}/>,
      logoName: 'VS Code',
      children: <>
        <DownloadSettings
          infoSetting={'Full settings'}
          downloadLink={'settings/phpstorm_full.zip'}
          infoLink={' phpstorm_full.zip'}
        />
        <DownloadSettings
          infoSetting={'Templates settings'}
          downloadLink={'settings/phpstorm_templates.zip'}
          infoLink={'phpstorm_templates.zip'}
        />
      </>
    },
  ]

  return (
    <div className={cn('settings')}>
      <div className="info-settings">
      </div>
      <div className="right-content">
        {rightCards.map(({ logo, logoName, children }) => (
          <div className="right-settings">
            <div className="logo-setting">
              {logo}
              <div className="phpstorm-text">{logoName}</div>
            </div>
            <div className="download-settings">
              {children}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;