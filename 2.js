var ExampleComponent = React.createClass({
	handlerFocus: function() {
		console.log('focus')
	},
	handlerChange: function(event) {
		this.setState({
			inputText: event.target.value
		})
	},
	getInitialState: function() {
		return {
			inputText: 'null'
		};
	},
	componentWillMount: function() {
		console.log('me will mount');
	},
	componentDidMount: function() {
		console.log('me did mounted');
	},
	componentWillUpdate: function() {
		console.log('me will update');
	},
	componentDidUpdate: function() {
		console.log('me did update');
	},			
	componentWillReceiveProps: function() {
		console.log('me will receive props');
	},
	render: function() {
		return (
			<div>
				<input type="text"
					onFocus={this.handlerFocus} onChange={this.handlerChange}/>
				<div>
				<label>input：{this.state.inputText}</label>
				</div>
			</div>
		);
	}
})


ReactDOM.render(<ExampleComponent input="init"/>, document.getElementById('container'));

