import React, {Component} from 'react';

class RouletteMissionParameters extends Component {
    render() {
      return (
        <div className='popup_mission'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <form onSubmit= {this.handleSubmit}>
            <label>
              {"Distance between Roulettes: "}
              <input type="text"/>
            </label>
              <div>{"\n"}</div>
            <label>
              {"Number of Roulettes: "}
              <input type = "text"/>
            </label>
              <div>{"\n"}</div>
            <button class="submit" onClick={this.props.closePopup}>Submit</button>
          </form>
          </div>
        </div>
      );
    }
  }

class RouletteMissionFunctions extends Component {
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
        <div className='RouletteMissionFunctions'>
          <button class="missionoptions" onClick={this.togglePopup.bind(this)}>Roulette Mission</button>
          {this.state.showPopup ? 
            <RouletteMissionParameters
              text='Roulette Mission'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      );
    }
  };
  
export default RouletteMissionFunctions;