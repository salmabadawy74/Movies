import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";

import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utilti/paginate";
import Pagination from "../Common/pagination";
import MoviesTable from "../Common/MoviesTable";
import ListGroup from "../Common/listGroup";
import _ from "lodash";
import { Link } from "react-router-dom";

export default class App extends Component {
  state = {
    movies: [],
    PageSize: 4,
    currentPage: 1,
    genres: [],
    selectedItem: "",
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres,
    });
  }
  hundleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    console.log(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  hundleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    console.log(movies);
  };
  hundlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  hundleGenreSelect = (genre) => {
    this.setState({ selectedItem: genre, currentPage: 1 });
  };
  hundleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };
  render() {
    const {
      selectedItem,
      movies: allMovies,
      currentPage,
      sortColumn,
      PageSize,
      genres,
    } = this.state;

    const filtered =
      selectedItem && selectedItem._id
        ? allMovies.filter((m) => m.genre._id === selectedItem._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, PageSize);

    return (
      <div className="container ">
        {allMovies.length === 0 ? (
          <h1>There's no Movies </h1>
        ) : (
          <h4>there 's {this.state.movies.length} movie</h4>
        )}
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            Add New Movie
          </Link>
        </div>
        <div className="row my-5">
          <div className="col-3">
            <ListGroup
              items={genres}
              onItemSelect={this.hundleGenreSelect}
              selectedItem={selectedItem}
            />
          </div>
          <div className="col-9">
            <MoviesTable
              movies={movies}
              hundleLike={this.hundleLike}
              hundleDelete={this.hundleDelete}
              onSort={this.hundleSort}
              sortColumn={sortColumn}
            />
          </div>
        </div>
        <Pagination
          itemCount={filtered.length}
          PageSize={PageSize}
          onPageChange={this.hundlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}
