import React from 'react';
import './App.css';
import List from './List.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: [], term: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

      
  handleChange(event) {
    this.setState({term: event.target.value});
  }

  handleSubmit(event) {
      event.preventDefault();
      this.setState({list: [...this.state.list, this.state.term]});
      this.state.term = '';
  }

  handleItemDelete(liItem) {
    liItem.remove();
  }

  render() {
    const hasItems = this.state.list.length;
    if(hasItems) {
      return (
        <div className="App">
          <h1>To Do</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
                Add a new item to the TODO list
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit"></input>
        </form>
          <List list={this.state.list} onDeleteItem={this.handleItemDelete}/>
        </div>
      );
    } 

    return (
      <div className="App">
        <h1>To Do</h1>
        <form onSubmit={this.handleSubmit}>
            <label>
                Add a new item to the TODO list
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit"></input>
        </form>
        <p>Great! You have finished doing everything on your to-do list.</p>
      </div>
    );

  }
}

export default App;
