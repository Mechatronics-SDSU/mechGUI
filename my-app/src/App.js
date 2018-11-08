import React, {Component} from 'react';
import MissionMenu from './MissionMenu';
import MechatronicsLogo from './MechatronicsLogo';
import StartAutonomous from './StartAutonomous';
import EmergencyStop from './EmergencyStop';
import StartTesting from './StartTesting';
import Square from './Square';
//import TaskQueue from './TaskQueue';
import AddWaypoint from './AddWaypoint';

class App extends Component {

    constructor () {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="container">

                <div className="MechatronicsLogo">
                    <MechatronicsLogo />
                </div>

                <div class = "align">
                    <div class="mainButtons">
                        <StartAutonomous />
                        <StartTesting />
                        <EmergencyStop />
                    </div>
                
                    <div class="square">
                        <Square />
                    </div>
                </div>

                <div class= "align">
                    <div class= "addingButtons">
                        <MissionMenu />
                        <AddWaypoint />
                    </div>
                </div>


            </div>
        );
    }
}

export default App;