import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        this.props.onDelete(e.target.parentElement);
    }

    render() {
      return (
        <li>
            <h2>{this.props.name}</h2>
            <button onClick={this.handleDelete}>Delete</button>
        </li>
      );
    }
  }
  
  export default ListItem;