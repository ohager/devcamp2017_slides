import React, { Component } from 'react';
import { images } from './theme';

import './todolist.css';
import { CodePane } from '../../src';

class TodoList extends Component {

	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
		this.state = {
			show: false
		};
	}

	onClick() {
		this.setState({ show: !this.state.show });
	}

	render() {
		return (
			<span className="todolist-slide" onClick={this.onClick} >
				<img src={images.todolist} className={this.state.show ? 'todolist show' : 'todolist'}/>
				<div className={this.state.show ? 'code show' : 'code'} >
				<CodePane
					lang="js"
					source={require('raw-loader!../assets/code/lesson3.1.code')}
				/>
				</div>
			</span>
		);
	}
}

export default TodoList;
