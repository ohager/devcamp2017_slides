import React, {Component} from 'react';
import {Heading, List, ListItem, Image, Appear, CodePane} from '../../src';
import {images, colors} from './theme';
import Spacer from "./spacer";
import LessonTitle from "./lessonTitle";

export const Lesson1Title = () => (
	<LessonTitle image={images.lesson1} title="Lição 1"/>
);

export const Lesson1Page1 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Bad 💩
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson1.1.code')}
			margin="20px auto"
		/>
	</div>
);

export const Lesson1Page2 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Good 👍
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson1.2.code')}
			margin="20px auto"
		/>
	</div>
);

export const Lesson1Page3 = () => (
	<div>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson1.3.code')}
			margin="20px auto"
		/>
	</div>
);


export const Lesson1Page4 = () => (
	<div>
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Mantenha mais simples possível, p.e. booleano
		</Heading>
		<Spacer />
		<Appear fid="1">
			<Heading size={4} fit textColor="txtPrimary" textFont="primary">
				⭐ Extrair como estado só se for necessário (DRY)
			</Heading>
		</Appear>
	</div>
);
