import React from 'react';
import { Heading, Image } from '../../src';

const LessonTitle = ({ title, image, children = '' }) => (
	<div>
		<Heading size={1} caps textColor="txtPrimary" textFont="primary">
			{title}
		</Heading>
		<Image src={image} height="320"/>
		<Heading size={4} textColor="txtPrimary" textFont="primary">
			{children}
		</Heading>
	</div>
);

export default LessonTitle;
