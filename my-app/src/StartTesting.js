import React, {Component} from 'react';
import NameForm from './NameForm';

class StartTestingMessage extends Component {
    constructor () {
        super();
        this.state = {value: ""};
    }
    
    handleChange(event) {
        this.setState({ value: event.target.value });
        console.Log(this.state.value)
    }

    handleSubmit(event) {
        
    }

    render () {
    return (
        <div className='popup_start'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <form onSubmit= {this.handleSubmit}>
            <NameForm handleSubmit={this.handleSubmit}handleChange = {this.handleChange}/>
            <button class = "submit" onClick={this.props.closePopup} >Submit</button>
          </form>
          </div>
        </div>
      );
    }
};

class StartTesting extends Component {
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
            <div className = 'StartTesting'>
            <button class="yellow" onClick={this.togglePopup.bind(this)}>Start in Testing Mode</button>
            {this.state.showPopup ? 
            <StartTestingMessage
              text='Primary GUI User'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
            }
            </div>
        );
    }
};

export default StartTesting;