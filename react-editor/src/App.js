import React, { Component } from 'react';
import './App.css';

const shortHeader = <h2>Meow Meow</h2>;
const longHeader = <h1> Bruuuuh</h1>;

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      message: props.initialMessage,
      color: '#4682b4',
      fontStyle: 'normal',
      fontSize: '1em'
    }
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }
  render() {

    const header = this.state.message.length < 20 ? shortHeader : longHeader;
    return (
      <div>
         {header} 
        <div>
          <label>
            Message: 
            <input name="message" value ={this.state.message} 
            onChange={({ target}) => this.handleChange(target)}/>
            </label>
            <label id="color">
              Color:
                <input name="color" value={this.state.color} type="color"
                onChange={({target}) => this.handleChange(target)}/>
              </label>
              <label>
                <p> Make it slanty </p>
                <form>
                  <input type="radio" name="fontStyle" value="italic" onChange={({target}) => this.handleChange(target)}/> Italic
                  <input type="radio" name="fontStyle" value="normal" onChange={({target}) => this.handleChange(target)}/> None
                </form>
              </label>
              <p> Change the size </p>
              <label>
                <form>
                  <input type="radio" name="fontSize" value="4em" onChange={({target}) => this.handleChange(target)}/> Big
                  <input type="radio" name="fontSize" value="2em" onChange={({target}) => this.handleChange(target)}/> Medium
                  <input type="radio" name="fontSize" value="1em" onChange={({target}) => this.handleChange(target)}/> Little
                
                </form>
              </label>
            </div>
            <div className = "display" style={{
              color: this.state.color,
              fontStyle: this.state.fontStyle,
              fontSize: this.state.fontSize
            }}>
            {this.state.message}
            </div>
          </div>
    );
  }
}

export default App;
