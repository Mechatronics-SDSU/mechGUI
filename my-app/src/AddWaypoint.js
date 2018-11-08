import React, {Component} from 'react';

class WaypointFunctions extends Component {
    render() {
      return (
        <div className='popup_start'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <form onSubmit= {this.handleSubmit}>
            <label class="parameterinputs">
              {"Enter Waypoint: "}
              <input type="text"/>
              <div>{"\n"}</div>
            </label>
            <button class="submit" onClick={this.props.closePopup}>Submit</button>
          </form>
          </div>
        </div>
      );
    }
  }

class AddWaypoint extends Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {
      return (
        <div>
          <button class = "addMission" onClick={this.togglePopup.bind(this)}>(+) Add Waypoint</button>
          {this.state.showPopup ? 
            <WaypointFunctions
              text="
              Add Waypoint
              "
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      );
    }
  };
  
export default AddWaypoint;