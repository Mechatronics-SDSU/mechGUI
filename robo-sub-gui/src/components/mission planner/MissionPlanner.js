import React from 'react'; 
import { DropdownButton, MenuItem, Table } from 'react-bootstrap';
import { Missions } from './MissionParams.json';

class MissionPlanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMission: "Gate",
			missionID: 0
		}
	}

	changeMission(id) {
		this.setState({ 
			currentMission: Missions[id].type,
			missionID: Missions[id].id
		});
	}

	render() {
		const mission = Missions[this.state.missionID];
		return (
			<div className='my-4'> 
				<DropdownButton title="Select Mission">
				    
					{(() => {
							const items = [];
							for(let i = 0; i < Missions.length; i++){
								items.push(
									<MenuItem 
										href="#" 
										onClick={() => this.changeMission(Missions[i].id)}
										>{Missions[i].type}
									</MenuItem>
								)
							}
							return items;
					})()}

				</DropdownButton>

				<div className='my-2'>
				    <Table bordered condensed hover>
						<thead>
							<tr>
								<th colSpan="2" className="font-weight-normal">{mission.type}</th>
							</tr>
						</thead>
						<tbody>

							{(() => {
								const rows = [];
								for(let i = 0; i < mission.params.length; i++){
									rows.push(
										<tr>
											<th className="font-weight-normal">{mission.params[i].name}</th>
											<th contentEditable="true">{mission.params[i].value.toString()}</th>
										</tr>
									)
								}
								return rows;
							})()}

						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default MissionPlanner;