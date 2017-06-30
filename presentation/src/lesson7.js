import React from 'react';
import {Text, Layout, Heading, Image, Appear, CodePane} from '../../src';
import {Table, TableBody, TableHeader, TableHeaderItem, TableRow, TableItem} from '../../src';
import Spacer from './spacer';
import LessonTitle from './lessonTitle';

import {images, colors} from './theme';

export const Lesson7Title = () => (
	<LessonTitle image={images.lesson7} title="Lição 7">
		<div>Break huge states in parts</div>
	</LessonTitle>
);

export const Lesson7Page1 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Best practices of the Top Dogs
		</Heading>
		<Spacer/>
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Flux suporta múltiplos "Stores"
		</Heading>
		<Text textColor="black" textFont="primary">
			https://facebook.github.io/flux/docs/flux-utils.html#store
		</Text>
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Redux promove vários "Reducers"
		</Heading>
		<Text textColor="black" textFont="primary" >
			http://redux.js.org/docs/recipes/reducers/UsingCombineReducers.html
		</Text>
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ MobX recomenda "Domain Stores"
		</Heading>
		<Text textColor="black" textFont="primary" >
			https://mobx.js.org/best/store.html
		</Text>
	
	</div>
);

export const Lesson7Page2a = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Separação por contexto - Aplicação
		</Heading>
		<Spacer/>
		<Heading size={2} fit textColor="txtPrimary" textFont="primary">
			Notificações globais, Modais, Indicadores de Carregamento, etc.
		</Heading>
	</div>
);

export const Lesson7Page2b = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Separação por contexto - Domínio
		</Heading>
		<Spacer/>
		<Heading size={2} fit textColor="txtPrimary" textFont="primary">
			Pedidos, Serviços, Produtos, Compras, Vendas etc.
		</Heading>
	</div>
);

