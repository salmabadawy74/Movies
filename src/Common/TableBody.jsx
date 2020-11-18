import React,{Component} from 'react'
import _ from 'lodash';
class TableBody extends Component {
   renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };


    render() { 
            const{movies,hundleDelete,hundleLike,columns}=this.props

         return (
        <tbody >
          {movies.map((movie) => (
            <tr key={movie.id}>
   {columns.map(column => (
              <td key={this.createKey(movie, column)}>
                {this.renderCell(movie, column)}
              </td>
            ))}
            </tr>
          ))}
        </tbody>

  )
    }
}
 
export default TableBody;
