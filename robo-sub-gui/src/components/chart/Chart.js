import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({datapoints, direction}) => {

	const data = {
		labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		datasets: [{
			label: direction + ' vs. Time',
			data: datapoints,

			borderColor: 'rgba(200, 100, 100, 100)',
			fill: false,
		}]
	}

	const options = {
		responsive: true,
		title: {
			display: true,
			text: 'DVL Data'
		},
		tooltips: {
			mode: 'index'
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: '(s)'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: direction + '(m)'
				},
				ticks: {
					suggestedMin: -10000,
					suggestedMax: 10000,
				}
			}],
		}
	}

	return(
		<Line data={data} options={options}/>
	);
}

export default Chart;