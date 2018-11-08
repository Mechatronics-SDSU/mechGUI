import React, {Component} from 'react';

class DiceMissionParameters extends Component {
    render() {
      return (
        <div className='popup_mission'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <form onSubmit= {this.handleSubmit}>
            <label>
              {"Distance between Dice: "}
              <input type="text"/>
            </label>
              <div>{"\n"}</div>
            <label>
              {"Number of Dice: "}
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

class DiceMissionFunctions extends Component {
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
        <div className='DiceMissionFunctions'>
          <button class="missionoptions" onClick={this.togglePopup.bind(this)}>Dice Mission</button>
          {this.state.showPopup ? 
            <DiceMissionParameters
              text='Dice Mission'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      );
    }
  };
  
export default DiceMissionFunctions;