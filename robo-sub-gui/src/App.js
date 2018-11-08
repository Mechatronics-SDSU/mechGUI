import React, { Component } from 'react';
import './App.css';
import Mode from './components/mode/Mode.js';
import MissionPlanner from './components/mission planner/MissionPlanner.js';
import DVL from './components/dvl/DVL.js';

class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        const { currentMode } = this.state;
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <h2 className='m-4'>RoboSub GUI</h2>
                            <Mode />
                            <MissionPlanner />
                            
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    
                                    <DVL />
                                </div>
                                <div className="col">
                                    AHRS Data
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
