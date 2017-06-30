import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';

const _images = {
	title: require('../assets/title.jpg'),
	acmeshop: require('../assets/mockup_easm5.png'),
	tree: require('../assets/compontent_tree.png'),
	treestate: require('../assets/compontent_tree_appstate.png'),
	treestate_inv: require('../assets/compontent_tree_appstate_inv.png'),
	todolist: require('../assets/todolist.png'),
	maerchenonkel: require('../assets/maerchenonkel.png'),
	suggestion: require('../assets/suggestion.gif'),
	sad: require('../assets/sad.jpg'),
	hollywood: require('../assets/hollywood.png'),
	lesson1: require('../assets/lesson1.jpg'),
	lesson2: require('../assets/lesson2.jpg'),
	lesson3: require('../assets/lesson3.png'),
	lesson4: require('../assets/lesson4.png'),
	lesson5: require('../assets/lesson5.png'),
	lesson6: require('../assets/lesson6.png'),
	lesson7: require('../assets/lesson7.png')
};

preloader(_images);

require('normalize.css');
require('../../src/themes/default/index.css');

export const theme = createTheme({
	txtPrimary: 'rgba(255,255,255,0.8)',
	txtSecondary: 'rgba(53,37,33,0.8)',
	bgPrimary: '#352521',
	bgLesson1: '#41bae9',
	bgLesson2: '#ff8500',
	bgLesson3: '#1D8B00',
	bgLesson4: '#7D000F',
	bgLesson5: '#C79133',
	bgLesson6: '#052456',
	bgLesson7: '#780033'
});

export const images = _images;
