import React, {Component} from 'react';
import NameForm from './NameForm';

class StartAutonomousMessage extends Component {
    render () {
    return (
        <div className='popup_start'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <form onSubmit= {this.handleSubmit}>
            <NameForm />
            <button class="submit" onClick={this.props.closePopup}>Submit</button>
          </form>
          </div>
        </div>
      );
    }
};

class StartAutonomous extends Component {
    constructor() {
        super();
        this.state = {
          showPopup: false,
        };

    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup //property- property not showing up
        });
    }
    render() {
        return (
            <div className = 'StartAutonomous'>
            <button class="green" onClick={this.togglePopup.bind(this)}>Start in Autonomous Mode</button>
            {this.state.showPopup ? 
            <StartAutonomousMessage
              text='Primary GUI User'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
            }
            </div>
        );
    }
};

export default StartAutonomous;