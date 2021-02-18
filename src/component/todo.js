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
    var todos = [newItem, ...this.state.mytodo];
    console.log(todos);
    this.setState({
        showName: true,
        mytodo: todos
    }); 
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>My todo</label>
          <input type="text" name="mytodo" onChange={this.displayNameHandler} value={this.state.currentItem.text} />
          <button type="submit">Add</button>
            {this.state.mytodo.map(a=> { return <li key={a.key}>{(a.text)}</li>})}<br/>
        </form>
      </div>
    );
  }
}

export default Todo;
