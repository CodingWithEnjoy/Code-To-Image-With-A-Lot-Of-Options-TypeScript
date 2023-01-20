import React from 'react';
import { AvatarBlock } from './AvatarBlock';
import { CodeControl } from './CodeBlock';
import { ImageBlock } from './ImageBlock';
import { QrControl } from './QrBlock';
import { TextControl } from './TextBlock';
import { WindowBlock } from './WindowBlock';

interface Props {
	type: string;
}

export const ControlHandler: React.FC<Props> = ({ type }) => {
	// Store Actions
	switch (type) {
		case 'code':
			return <CodeControl id={Math.random().toString()}></CodeControl>;
		case 'text':
			return <TextControl id={Math.random().toString()}></TextControl>;
		case 'qr':
			return <QrControl id={Math.random().toString()}></QrControl>;
		case 'image':
			return <ImageBlock id={Math.random().toString()}></ImageBlock>;
		case 'window':
			return <WindowBlock id={Math.random().toString()}></WindowBlock>;
		case 'avatar':
			return <AvatarBlock id={Math.random().toString()}></AvatarBlock>;
		default:
			return <></>;
	}
};
