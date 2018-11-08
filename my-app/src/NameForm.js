import React from 'react';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bing(this);
  }

  render() {
    return (
    <div>
      <div>{"\n"}</div>
      <form>
        <label>
          {"Name: "}
          <input id = "userName" type="text" onChange={() => this.props.handleChange} />
          <button onClick={this.props.handleSubmit} >send</button>
        </label>
      </form>
    </div>
    );
  }
}