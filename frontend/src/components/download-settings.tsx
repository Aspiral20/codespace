import React, { FC } from 'react';

interface DownloadSettingsProps {
	infoSetting?: string | React.ReactNode
	infoLink?: string | React.ReactNode
	downloadLink?: string,
}

const DownloadSettings: FC<DownloadSettingsProps> = ({
	infoSetting,
	infoLink,
	downloadLink,
}) => {
	return (
		<div className="download">
			<div className="download-info">{infoSetting}</div>
			<div className="download-archive">
				<a href={downloadLink} className={'my-workspace-link'} download>{infoLink}</a>
			</div>
		</div>
	);
};

export default DownloadSettings;