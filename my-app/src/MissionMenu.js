import React, { Component } from 'react';
import DiceMissionFunctions from './diceMissionParameters';
import RouletteMissionFunctions from './rouletteMissionParameters';
import BuoyMissionFunctions from './buoyMissionParameters';

class MissionMenu extends Component {

  //describes initial state of app
  constructor() {
    super(); //initial state?
    this.state = { //this=current class. 
      showMenu: false, // initial state is: the menu isn't showing
    };

    //BIND FUNCTION: 
    this.showMenu = this.showMenu.bind(this); 
    this.closeMenu = this.closeMenu.bind(this);
  }

  //function that shows the menu when you click on it
  showMenu(event) {
    //event.preventDefault(); 
    //set state to show menu. Listen to see if it's clicked on... if yes, close the menu
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  //function that closes the menu when you click on it
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      //set state to close menu. You don't have to listen to see if it's clicked on anymore.
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
    }
  }

  //what the "app" actually displays onscreen. Calls the functions above
  render() {
    return (
      <div>
        <button class="addMission" onClick={this.showMenu}>
          (+) Add Mission
        </button>
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={
                  (element) => {
                  this.dropdownMenu = element;
                }
              } >
                <BuoyMissionFunctions />
                <RouletteMissionFunctions />
                <DiceMissionFunctions />
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default MissionMenu;