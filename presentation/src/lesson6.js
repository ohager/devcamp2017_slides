import React from 'react';
import {Text, Layout, Heading, Image, Appear, CodePane} from '../../src';
import {Table, TableBody, TableHeader, TableHeaderItem, TableRow, TableItem} from '../../src';
import Spacer from './spacer';
import LessonTitle from './lessonTitle';

import {images, colors} from './theme';

export const Lesson6Title = () => (
	<LessonTitle image={images.lesson6} title="Lição 6">
		<div>Manage your state globally</div>
	</LessonTitle>
);

export const Lesson6Page1 = () => (
	<div>
		<Image src={images.treestate}/>
	</div>
);

export const Lesson6Page2 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Basic Principles
		</Heading>
		<Spacer/>
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Deixar acessível por todos os componentes
		</Heading>
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Alterar o estado apenas em um único ponto bem definido
		</Heading>
	</div>
);

export const Lesson6Page3 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Acesso ao estado
		</Heading>
		<Heading size={1} fit textColor="txtPrimary" textFont="primary">
			Reactive - Hollywood principle: Don't call us, we call you! 📞
		</Heading>
		<Spacer/>
		<Image src={images.hollywood} width="600" style={{opacity: '0.75'}}/>
	</div>
);

export const Lesson6Page4a = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary"
		         style={{transform: "translateX(45%) translateY(200px) rotateZ(90deg)"}}>
			Observer/PubSub
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson6.1.code')}
			margin="-180px auto"
			style={{transform: "scale(0.8)"}}
		/></div>
);

export const Lesson6Page4b = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Using Browser Events
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson6.2.code')}
		/></div>
);

export const Lesson6Page5 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Alterar o estado
		</Heading>
		<Heading size={6} textColor="txtPrimary" textFont="primary">
			"Single Source of Truth"🍺
		</Heading>
	</div>
);

export const Lesson6Page6 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary"
		         style={{transform: "translateX(55%) translateY(60px) rotateZ(90deg)"}}>
			Update
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson6.3.code')}
			margin="-80px auto"
		/>
	</div>
);

export const Lesson6Page6b = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary" >
			Update Usage
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson6.3b.code')}
		/>
	</div>
);

export const Lesson6Page7 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Basic Principles Recap
		</Heading>
		<Spacer/>
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Acesso ao estado de forma reativa com Observer/PubSub ou similar
		</Heading>
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Estado alterável apenas pelo próprio State Manager (imutabilidade força)
		</Heading>
	</div>
);
