import React, {Component} from 'react';
import {Text, Code, Heading, List, ListItem, Image, Appear, CodePane} from '../../src';
import Spacer from './spacer';
import LessonTitle from './lessonTitle';
import {images, colors} from './theme';
import TodoList from "./todolist";

export const Lesson3Title = () => (
	<LessonTitle image={images.lesson3} title="Lição 3">
		Make your state immutable
	</LessonTitle>
);

export const Lesson3Page1 = () => (
	<div>
		<TodoList/>
	</div>
);

export const Lesson3Page2 = () => (
	<div>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson3.2.code')}
			margin="20px auto"
		/>
	</div>
);

export const Lesson3Page3 = () => (
	<div>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson3.2b.code')}
			margin="20px auto"
		/>
	</div>
);

export const Lesson3Page4 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Solução subótima 😕
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson3.3.code')}
			margin="20px auto"
		/>
		<Spacer/>
		<Appear fid="1">
			<Heading size={1} fit textColor="txtPrimary" textFont="primary">
				E os camaradas? Sempre vão copiar?
			</Heading>
		</Appear>
	</div>
);

export const Lesson3Page5 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Solução melhor 😊
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson3.3b.code')}
			margin="20px auto"
		/>
	</div>
);

export const Lesson3Page6 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Como fazer imutável? 🤔
		</Heading>
		<iframe src="https://repl.it/IWvC/1" width="100%" height="600"/>
	</div>
);

export const Lesson3Page6a = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Como fazer imutável? 🤔
		</Heading>
		<Spacer />
		<Text textColor="txtPrimary" textFont="primary">
			https://github.com/facebook/immutable-js [60KiB]
		</Text>
		<Text textColor="txtPrimary" textFont="primary">
			https://github.com/rtfeldman/seamless-immutable [8KiB]
		</Text>
		<Text textColor="txtPrimary" textFont="primary">
			https://github.com/Yomguithereal/baobab [33KiB]
		</Text>
		<Text textColor="txtPrimary" textFont="primary">
			https://github.com/planttheidea/crio [51KiB]
		</Text>
		<Text textColor="txtPrimary" textFont="primary">
		... etc etc pp
		</Text>
	</div>
);


export const Lesson3Page7 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			The good things 🍺
		</Heading>
		<Spacer />
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Evite alterações acidentais (bom para times)
		</Heading>
		<Appear fid="2">
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Permite comparação por referência (rápido!)
		</Heading>
		</Appear>
		<Appear fid="2">
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson3.4.code')}
			margin="20px auto"
		/>
		</Appear>
	</div>
);

export const Lesson3Page8 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			The bad thing(s) 🍋
		</Heading>
		<Spacer />
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Mais verboso/trabalhoso para alterar
		</Heading>
	</div>
);

