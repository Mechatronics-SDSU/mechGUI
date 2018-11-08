import React, {Component} from 'react';

class BuoyMissionParameters extends Component {
    render() {
      return (
        <div className='popup_mission'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <form onSubmit= {this.handleSubmit}>
            <label class="parameterinputs">
              {"Distance between Buoys: "}
              <input type="text"/>
              <div>{"\n"}</div>
            </label>
            <label class="parameterinputs">
              {"Number of Buoys: "}
              <input type = "text"/>
              <div>{"\n"}</div>
            </label>
            <button class="submit" onClick={this.props.closePopup}>Submit</button>
          </form>
          </div>
        </div>
      );
    }
  }

class BuoyMissionFunctions extends Component {
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
        <div className='BuoyMissionFunctions'>
          <button class="missionoptions" onClick={this.togglePopup.bind(this)}>Buoy Mission</button>
          {this.state.showPopup ? 
            <BuoyMissionParameters
              text="
              Buoy Mission
              "
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      );
    }
  };
  
export default BuoyMissionFunctions;