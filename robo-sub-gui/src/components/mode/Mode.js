import React from 'react'; 

class Mode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMode: 'idle'
		}
	}

	changeMode(mode) {
		console.log("attempt mode update");

		// fetch('http://localhost:5000/', {
		// 	method: 'get',
		// 	headers: {'Content-Type': 'application/json'}
		// })
		// 	.then(response => response.text())
		// 	.then(someData => {
		// 		console.log(someData);
		// 		this.setState({ currentMode: mode});
		// 	});


		fetch('http://localhost:5000/mode', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				mode: mode
			})
		})
			.then(response => response.json())
			.then(response => {
				console.log(response);
				if(response.success = true){
					this.setState({ currentMode: mode});
				} else {
					this.setState({ currentMode: "Error: check console"})
				}
			});

		//this.setState({ currentMode: mode});
	}

	render() {
		const { currentMode } = this.state;
		return (
			<div className='my-4'> 
				<button 
					type="button" 
					className="btn btn-secondary btn-block"
					onClick={() => this.changeMode("Autonomous")}
					>Start Autonomous
				</button>
				<button 
					type="button" 
					className="btn btn-secondary btn-block"
					onClick={() => this.changeMode("Debug")}
					>Start Debug
				</button>
				<button 
					type="button" 
					className="btn btn-danger btn-block"
					onClick={() => this.changeMode("Stopped")}
					>Stop
				</button>
				<div className="card my-2">
				    <div className="card-footer">
				      	<small className="text-muted">{`Status ${currentMode}`}</small>
				    </div>
				</div>
			</div>
		);
	}
}

export default Mode;