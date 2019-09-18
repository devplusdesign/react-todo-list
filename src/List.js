import React from 'react';
import ListItem from './ListItem.js';

class List extends React.Component {
    constructor(props) {
        super(props);

    }

    onDelete(val) {
        this.props.onDeleteItem(val);
    }

    render() {
        const list = this.props.list;
        const onDeleteFn = this.props.onDeleteItem;
        const toDoList = list.map(function(item, index) {
            return <ListItem key={index} name={item} onDelete={onDeleteFn}/>;
        })
      return (
        <ol>
            {toDoList}
        </ol>
      );
    }
  }
  
  export default List;