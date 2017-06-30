import React from 'react';

import {
	Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Fit,
	Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
	TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from '../../src';

import Title from './title';

import {images, theme} from './theme';

import AcmeShop from './acmeshop';
import {Lesson1Title, Lesson1Page1, Lesson1Page2, Lesson1Page3, Lesson1Page4} from './lesson1';
import {Lesson2Title, Lesson2Page1, Lesson2Page2, Lesson2Page3, Lesson2Page4} from './lesson2';
import {
	Lesson3Title, Lesson3Page1, Lesson3Page2, Lesson3Page3, Lesson3Page4, Lesson3Page5,
	Lesson3Page6, Lesson3Page7, Lesson3Page6a, Lesson3Page8
} from './lesson3';
import {Lesson4Page1, Lesson4Page2, Lesson4Page3, Lesson4Page4, Lesson4Title} from './lesson4';
import {
	Lesson5Page1, Lesson5Page1a, Lesson5Page2, Lesson5Page3, Lesson5Page4, Lesson5Page5, Lesson5Page5a, Lesson5Page5b,
	Lesson5Page6,
	Lesson5Title
} from './lesson5';
import {
	Lesson6Page1, Lesson6Page2, Lesson6Page3, Lesson6Page4, Lesson6Page4a, Lesson6Page4b, Lesson6Page5, Lesson6Page6,
	Lesson6Page6b, Lesson6Page7, Lesson6Page8, Lesson6Page8b,
	Lesson6Title
} from "./lesson6";
import {Lesson7Page1, Lesson7Page2, Lesson7Page2a, Lesson7Page2b, Lesson7Title} from "./lesson7";
import Spacer from "./spacer";

require('normalize.css');
require('../../src/themes/default/index.css');
require('../assets/custom.css');

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500} progress="bar">
				<Slide transition={['fade']} bgImage={images.title}>
					<Title/>
				</Slide>
				<Slide transition={['slide']} bgColor="bgPrimary">
					<Heading size={1} fit textColor="txtPrimary" textFont="primary">
						O que é o estado de aplicação?
					</Heading>
				</Slide>
				<Slide transition={['fade']} bgColor="bgPrimary">
					<AcmeShop />
				</Slide>
				<Slide transition={['fade']} bgColor="bgPrimary">
					<Image src={images.treestate} width="100%"/>
					<Appear fid={1}>
						<Heading size={1} fit textColor="txtPrimary" textFont="primary">
							Diretamente acessível por todos os componentes
						</Heading>
					</Appear>
				</Slide>
				
				
				<Slide transition={['slide', 'fade']} bgColor="bgLesson1">
					<Lesson1Title/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson1">
					<Lesson1Page1/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson1">
					<Lesson1Page2/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson1">
					<Lesson1Page3/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson1">
					<Lesson1Page4/>
				</Slide>
				
				
				<Slide transition={['slide', 'fade']} bgColor="bgLesson2">
					<Lesson2Title/>
				</Slide>
				
				<Slide transition={['fade']} bgColor="bgLesson2">
					<Lesson2Page1/>
				</Slide>
				
				<Slide transition={['fade']} bgColor="bgLesson2">
					<Lesson2Page2/>
				</Slide>
				
				<Slide transition={['fade']} bgColor="bgLesson2">
					<Lesson2Page3/>
				</Slide>
				
				
				<Slide transition={['slide', 'fade']} bgColor="bgLesson3">
					<Lesson3Title/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson3">
					<Lesson3Page1/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page2/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page3/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page4/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page5/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page6/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page6a/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson3">
					<Lesson3Page7/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson3">
					<Lesson3Page8/>
				</Slide>
				
				<Slide transition={['slide', 'fade']} bgColor="bgLesson4">
					<Lesson4Title/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson4">
					<Lesson4Page1/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson4">
					<Lesson4Page2/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson4">
					<Lesson4Page3/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson4">
					<Lesson4Page4/>
				</Slide>
				
				
				<Slide transition={['slide', 'fade']} bgColor="bgLesson5">
					<Lesson5Title/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson5">
					<Lesson5Page1/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson5">
					<Lesson5Page1a/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson5">
					<Lesson5Page2/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson5">
					<Lesson5Page3/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson5">
					<Lesson5Page4/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson5">
					<Lesson5Page5a/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson5">
					<Lesson5Page5b/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson5">
					<Lesson5Page6/>
				</Slide>
				
				<Slide transition={['slide', 'fade']} bgColor="bgLesson6">
					<Lesson6Title/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson6">
					<Lesson6Page1/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson6">
					<Lesson6Page2/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson6">
					<Lesson6Page3/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson6">
					<Lesson6Page4a/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson6">
					<Lesson6Page4b/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson6">
					<Lesson6Page5/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson6">
					<Lesson6Page6/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson6">
					<Lesson6Page6b/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson6">
					<Lesson6Page7/>
				</Slide>
				
				<Slide transition={['slide', 'fade']} bgColor="bgLesson7">
					<Lesson7Title/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson7">
					<Lesson7Page1/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson7">
					<Lesson7Page2a/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson7">
					<Lesson7Page2b/>
				</Slide>
				
				<Slide transition={['slide', 'fade']} bgColor="bgPrimary">
					<Heading size={4} caps textColor="txtPrimary" textFont="primary">
						Resumo
					</Heading>
					<Appear>
						<Text size={4} textColor="txtPrimary" textFont="primary">
							⭐ Keep your state simple
						</Text>
					</Appear>
					<Appear>
						<Text size={2} textColor="txtPrimary" textFont="primary">
							⭐ Compose your state
						</Text>
					</Appear>
					<Appear>
						<Text size={2} textColor="txtPrimary" textFont="primary">
							⭐ Make your state immutable
						</Text>
					</Appear>
					<Appear>
						<Text size={2} textColor="txtPrimary" textFont="primary">
							⭐ Flatten your state
						</Text>
					</Appear>
					<Appear>
						<Text size={2} textColor="txtPrimary" textFont="primary">
							⭐ Determine your state's scope
						</Text>
					</Appear>
					<Appear>
						<Text size={2} textColor="txtPrimary" textFont="primary">
							⭐ Manage your state globally
						</Text>
					</Appear>
					<Appear>
						<Text size={2} textColor="txtPrimary" textFont="primary">
							⭐ Break huge states in parts
						</Text>
					</Appear>
				</Slide>
				
				<Slide transition={['slide', 'fade']} bgColor="bgPrimary">
					<Heading size={4} caps textColor="txtPrimary" textFont="primary">
						Just for fun!
					</Heading>
					<iframe
						src="https://rawgit.com/ohager/stappo/master/demo/index.html"
						width="100%" height="600"
						style={{backgroundColor: "white", padding: "8px"}}
					/>
				</Slide>
				
				<Slide transition={['zoom', 'fade']} bgColor="bgPrimary">
					<Heading size={4} caps textColor="txtPrimary" textFont="primary">
						274 bytes!
					</Heading>
					<Spacer/>
					<Text textColor="black" textFont="primary" bgColor="white"
					      style={{padding: "1em"}}
					>
						{require('raw-loader!../assets/code/lesson6.4.code')}
					</Text>
					<Spacer/>
					<Text textColor="txtPrimary" textFont="primary">
						Fully reactive App State Manager with immutable states
					</Text>
					<Text textColor="txtPrimary" textFont="primary">
						https://github.com/ohager/stappo
					</Text>
				</Slide>
				
				<Slide transition={['zoom']} bgColor="bgPrimary" bgImage={images.title} bgDarken={0.8}>
					<Heading size={1} caps textColor="txtPrimary" textFont="primary">
						Danke!🤘
					</Heading>
					<Spacer/>
					<Text textColor="txtPrimary" textFont="primary">
						github.com/ohager
					</Text>
					<Text textColor="txtPrimary" textFont="primary">
						linkedin.com/in/oliverhager
					</Text>
					<Text textColor="txtPrimary" textFont="primary">
						devbutze.com
					</Text>
				</Slide>
			
			
			</Deck>
		);
	}
}
