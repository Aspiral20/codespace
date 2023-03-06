import React, { FC } from 'react';
import cn from "classnames";
import { PHPStorm, Vscode } from "../../components";
import DownloadSettings from "../../components/download-settings";
import { v4 as uuid } from 'uuid'

interface SettingsProps {
}


const Settings: FC<SettingsProps> = () => {

	const rightCards = [
		{
			id: uuid(),
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
			id: uuid(),
			logo: <Vscode className={'vscode-svg'}/>,
			logoName: 'VS Code',
			children: <>
				<DownloadSettings
					infoSetting={'Full settings'}
					// downloadLink={'settings/phpstorm_full.zip'}
					infoLink={' phpstorm_full.zip'}
				/>
				<DownloadSettings
					infoSetting={'Templates settings'}
					// downloadLink={'settings/phpstorm_templates.zip'}
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
				{rightCards.map(({ id, logo, logoName, children }) => (
					<div key={id} className="right-settings">
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