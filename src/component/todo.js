import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      mytodo: [],
      currentItem:{
        text:'',
        key:''
      }
    }
  }

  displayNameHandler = (e) => {
    this.setState({ 
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    var todos = [...this.state.mytodo, newItem];
    console.log(todos)
    this.setState({
        showName: true,
        mytodo: todos,
        currentItem:{
          text:'',
          key:''
        },
    });  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Tere bas ki na hai</label>
          <input type="text" name="mytodo" onChange={this.displayNameHandler} value={this.state.currentItem.text} />
          <button type="submit">haha I told you</button>
          {<p>"mytodo: " {this.state.currentItem.text}</p>}
        </form>
      </div>
    );
  }
}
export default Todo;