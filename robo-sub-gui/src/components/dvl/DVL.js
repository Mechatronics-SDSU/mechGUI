import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from '../chart/Chart.js';
import './dvl.css'

const North = "North";
const East = "East";

class DVL extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"NorthData":  [0, 2000, 200, 6000, 5000, 1200, -180, -1020, 125, 1050, 110, 1700, 690],
			"EastData":  [900, 322, -466, 59, 3059, 1200, -180, -2122, -125, 1050, 6493, 5000, 6605]
		}
	}

	render() {
		return(
			<div>
				<div className="p-2"></div>
				<div className="border-custom py-4 pr-4 pl-2 rounded">
					<Chart datapoints={this.state.NorthData} direction={North} />	
				</div>
				<div className="p-2"></div>
				<div className="border-custom py-4 pr-4 pl-2 rounded">
					<Chart datapoints={this.state.EastData} direction={East} />	
				</div>		
			</div>
		)
	}
}


export default DVL;