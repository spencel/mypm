import React from 'react';

class RctAddPerson extends React.Component {
	// defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props.
	constructor( props ) {
		super( props );
		this.state = {
			view: 0
			// props can have a state mutable state counterpart, thereby props act as an initial or default values for state values
			//rctCaption: props.rctCaption
		};
	}
	/* Mounting sequence: These methods are called when an instance of a component is being created and inserted into the DOM:
				1. constructor()
				2. componentWillMount()
				3. render()
				4. componentDidMount()
	*/
	componentWillMount() {
		console.log( "RctAddPerson.componentWillMount()" );
	}
	componentDidMount() {
		console.log( "RctAddPerson.componentDidMount()" );
	}
	/* Updating sequence: An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:
				1. componentWillReceiveProps()
				2. shouldComponentUpdate()
				3. componentWillUpdate()
				4. render()
				5. componentDidUpdate()
	*/
	componentWillReceiveProps() {
		console.log( "RctAddPerson.componentWillReceiveProps()" );
	}
	// Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
	// shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.
	/*shouldComponentUpdate() {
		console.log( "RctAddPerson.shouldComponentReceiveProps()" );
	}*/
	componentWillUpdate() {
		console.log( "RctAddPerson.componentWillUpdate()" );
	}
	componentDidUpdate() {
		console.log( "RctAddPerson.componentDidUpdate()" );
	}
	// Unmounting: This method is called when a component is being removed from the DOM:
	componentWillUnmount() {
		console.log( "RctAddPerson.componentWillUnmount()" );
	}
	// Error handling: This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
	componentDidCatch() {
		console.log( "RctAddPerson.componentDidCatch()" );
	}
	promptUser = () => {
		this.setState({
			view: 1
		});
	}
	addPerson = () => {
		;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
		    this.setState({
					view: 0
				});
		  }
		}
		xhttp.open("POST", "addPerson.php", true);
		xhttp.send("Spencer Lank");
	}
	render() {
		if ( this.state.view === 0 ) {
		 return (
    	// This onClick syntax creates a call back every time this button renders, which can cause performance issues.
	      /*<div className="RctAddPerson" onClick={( event ) => this.handleOnClick( event )}>
	      	{ this.state.rctCaption }
	      </div>*/
	      // Pay attention to the way .bind( args ) are passed and which args are automatically passed
	      <div className="RctAddPerson">
	      	<input type="button" value="new" onClick={ this.promptUser }/>
	      </div>
	    );
		}
		else if ( this.state.view === 1 ) {
			return (
				<div className="RctAddPerson">
					<input type="text" placeholder="name" value=""/>
					<input type="button" value="add" onClick={ this.addPerson }/>
				</div>
			);
		}
	}
}

export default RctAddPerson;