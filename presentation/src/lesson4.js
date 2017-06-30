import React, {Component} from 'react';
import {Code, Heading, List, ListItem, Image, Appear, CodePane} from '../../src';
import Spacer from './spacer';
import LessonTitle from './lessonTitle';
import {CodeSlide} from 'spectacle-code-slide';

import {images, colors} from './theme';
import {Text} from "spectacle";

export const Lesson4Title = () => (
	<LessonTitle image={images.lesson4} title="Lição 4">
		<div>Flatten the state</div>
		<small>Keep it simple 2</small>
	</LessonTitle>
);

export const Lesson4Page1 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary"
		         style={{transform: "translateX(-55%) translateY(128px) rotateZ(-90deg)"}}>
			Problem 👾
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson4.1.code')}
			margin="-70px auto"
		/>
	</div>
);

export const Lesson4Page2 = () => (
	<div>
		<Text bold caps textColor="txtPrimary" textFont="primary">
			Update
		</Text>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson4.2a.code')}
			margin="20px auto"
		/>
		<Spacer/>
		<Appear>
			<div>
				<Text bold caps textColor="txtPrimary" textFont="primary">
					Update Immutable
				</Text>
				<CodePane
					lang="js"
					source={require('raw-loader!../assets/code/lesson4.2b.code')}
					margin="20px auto"
				/>
			</div>
		</Appear>
		<Spacer/>
		<Appear>
			<CodePane
				lang="js"
				source={require('raw-loader!../assets/code/lesson4.2c.code')}
				margin="20px auto"
			/>
		</Appear>
	</div>
);

export const Lesson4Page3 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary"
		         style={{transform: "translateX(55%) translateY(260px) rotateZ(90deg)"}}>
			Flattened / Normalized
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson4.3.code')}
			margin="-70px auto"
		/>
	</div>
);

export const Lesson4Page4 = () => (
	<div>
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ "Estados rasos" simplificam acesso/alterações
		</Heading>
		<Spacer/>
		<Appear fid="1">
			<div>
				<Heading size={4} fit textColor="txtPrimary" textFont="primary">
					⭐ Entidades normalizadas facilitam updates *significadamente*
				</Heading>
				<Spacer/>
				<Text textColor="txtPrimary" textFont="primary">
					😉 https://github.com/paularmstrong/normalizr
				</Text>
			</div>
		</Appear>
	</div>
);

