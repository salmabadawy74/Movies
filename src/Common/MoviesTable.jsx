import React,{Component} from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
class MoviesTable extends Component {
  columns = [
    { path: 'title', label: "title" },
    { path: 'genre.name', label: "Genre" },
    { path: 'numberInStock', label: "Stock" },
    { path: 'dailyRentalRate', label: "Rate" },
    { key: 'like'},
    {key:'delete' ,content:movie=> <button
                  className="btn btn-danger "
                  onClick={() => this.props.hundleDelete(movie)}
                >
                  Delete
                </button> }
    
 ]
 
  
  render() { 
    const { movies, hundleDelete, hundleLike, sortColumn, onSort } = this.props;
    
return (
    <React.Fragment>
      <table className="table p-3  text-center mx-auto">
      <TableHead onSort={onSort} sortColumn={sortColumn} columns={this.columns}/>
      <TableBody movies={movies} hundleDelete={hundleDelete} hundleLike={hundleLike} columns={this.columns}/>
      </table>
    </React.Fragment>
  );  }
}
 
export default MoviesTable ;

