import React, {Component} from 'react';
import {Code,Heading, List, ListItem, Image, Appear, CodePane} from '../../src';
import Spacer from "./spacer";
import LessonTitle from "./lessonTitle";

import {images, colors} from './theme';

export const Lesson2Title = () => (
	<LessonTitle image={images.lesson2} title="Lição 2">
		Compose your state
	</LessonTitle>
);

export const Lesson2Page1 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Trivial 👍
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson2.1a.code')}
			margin="20px auto"
		/>
		<Appear fid="1">
			<CodePane
				lang="js"
				source={require('raw-loader!../assets/code/lesson2.1b.code')}
				margin="20px auto"
			/>
		</Appear>
	</div>
);

export const Lesson2Page2 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Assign/... vs Merge
		</Heading>
		<iframe src="https://repl.it/IVKN/19" width="100%" height="600"/>
	</div>
);


export const Lesson2Page3 = () => (
	<div>
		<Heading size={5} textColor="txtPrimary" textFont="primary">
			⭐ Use composição para montar estado
		</Heading>
		<Spacer/>
		<Appear fid="1">
			<Heading size={5} textColor="txtPrimary" textFont="primary">
				⭐ Object.assign faz só "shallow copies"
			</Heading>
		</Appear>
		<Spacer/>
		<Appear fid="2">
			<Heading size={5} textColor="txtPrimary" textFont="primary">
				⭐ lodash.merge faz "deep copies"
			</Heading>
		</Appear>
	</div>
);
