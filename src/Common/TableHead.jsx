import React, { Component } from 'react'
import{FaSortUp,FaSortDown} from 'react-icons/fa'
class TableHead extends Component {
 rasieSort = (path) => {
      const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
    
      sortColumn.order = sortColumn.order=== 'asc' ? 'desc' : 'asc';
    }
    else {
      sortColumn.path = path;
      sortColumn.order='asc'
   }
   this.props.onSort(sortColumn)
  }
  renderSortIcon = column => {
    const sortColumn = this.props.sortColumn
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <FaSortUp/>
    return <FaSortDown/>

  }
  render() { 
    
    return (
        <thead>
        <tr>
          {this.props.columns.map(item => (<th key={item.path || item.key} onClick={() => this.rasieSort(item.path)}>{item.label}{this.renderSortIcon(item)}</th> ))}
           
          
          </tr>
        </thead>
    )
  }
}
 
export default TableHead;


