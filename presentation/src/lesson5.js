import React from 'react';
import {Text, Layout, Heading, Image, Appear, CodePane} from '../../src';
import {Table, TableBody, TableHeader, TableHeaderItem, TableRow, TableItem} from '../../src';
import Spacer from './spacer';
import LessonTitle from './lessonTitle';

import {images, colors} from './theme';

export const Lesson5Title = () => (
	<LessonTitle image={images.lesson5} title="Lição 5">
		<div>Determine your state's scope</div>
	</LessonTitle>
);

export const Lesson5Page1 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Story Time
		</Heading>
		<Image src={images.maerchenonkel} width={500}/>
	</div>
);

export const Lesson5Page1a = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Once upon a time
		</Heading>
		<Spacer/>
		<span style={{display: "flex"}}>
			<img src={images.suggestion} alt="Suggestion GIF" height={420}/>
			<div style={{textAlign: "left", marginLeft: "0.5em"}}>
			<Text bold textColor="txtPrimary" textFont="primary">
				⚫ Quis criar um suggestion/autocomplete
			</Text>
				<Appear>
					<Text bold textColor="txtPrimary" textFont="primary">
						⚫ Com Flux (nanoflux 🃏)
					</Text>
				</Appear>
				<Appear>
					<Text bold textColor="txtPrimary" textFont="primary">
						⚫ Tava de boa e muita vontade 🍺
					</Text>
				</Appear>
				<Appear>
					<Text bold textColor="txtPrimary" textFont="primary">
						⚫ Criei o componente ✔️
					</Text>
				</Appear>
				<Appear>
					<Text bold textColor="txtPrimary" textFont="primary">
						⚫ Criei ActionCreator, Store ✔️
					</Text>
				</Appear>
				<Appear>
					<Text bold textColor="txtPrimary" textFont="primary">
						⚫ Testei ✔️
					</Text>
				</Appear>
				<Appear>
					<Text bold textColor="txtPrimary" textFont="primary">
						⚫ Comecei usar num form ✔️
					</Text>
				</Appear>
				<Appear>
					<Text bold textColor="txtPrimary" textFont="primary">
						⚫ Com 3 suggestion components 💩
					</Text>
				</Appear>
			</div>
		</span>
	</div>
);

export const Lesson5Page2 = () => (
	<div>
		<Image src={images.sad} width={500}/>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			SO SAD
		</Heading>
	</div>
);

export const Lesson5Page3 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Action Creator
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson5.1.code')}
			margin="20px auto"
		/>
	</div>
);

export const Lesson5Page4 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Suggestion Store
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson5.2.code')}
			margin="20px auto"
		/>
	</div>
);

export const Lesson5Page5a = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			⭐ A lista de sugestões não é estado da aplicação
		</Heading>
	</div>
);

export const Lesson5Page5b = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			⭐ A lista de sugestões é estado do componente!
		</Heading>
	</div>
);

export const Lesson5Page6 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Como determinar o escopo do estado?
		</Heading>
		<Spacer/>
		<Layout>
			<Table textColor="txtSecondary" textFont="primary"
				style={{textAlign:"left"}}
			>
				<TableHeader>
					<TableRow>
						<TableHeaderItem>Componente</TableHeaderItem>
						<TableHeaderItem>Aplicação</TableHeaderItem>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<Appear fid="1">
							<TableItem>⭐ Estado não compartilhado</TableItem>
						</Appear>
						<Appear fid="2">
							<TableItem>⭐ Estado compartilhado</TableItem>
						</Appear>
					</TableRow>
					<TableRow>
						<Appear fid="3">
							<TableItem>⭐ Estado fortemente acoplado ao componente (id!)</TableItem>
						</Appear>
						<Appear fid="4">
							<TableItem>⭐ Vida útil do estado é maior que a do componente</TableItem>
						</Appear>
					</TableRow>
				</TableBody>
			</Table>
		</Layout>
	</div>
);
