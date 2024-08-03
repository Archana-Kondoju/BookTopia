import React from 'react';
import './search.css';
import { FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
// import Nav from '../Header/navBar';
const Search = ({value, onChange}) => {
  return (
    <div className="App">
      {/* <Nav items={this.state.genres}
                    textProperty="name"
                    valueProperty="_id"
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect} /> */}
      <header className="App-header">
        <h3>Booktopia</h3>
        <p>
          Search your required books here
        </p>
          <FormGroup>
            <Input type="text" name="query" className="form-control" id="searchText" value={value} onChange={e => onChange(e.currentTarget.value)}/>
          </FormGroup>
          <FormGroup>
          <Link to={'/result/'+ value} className="search-button"> Search Now </Link>
          </FormGroup>
      </header>
    </div>
  );
}

export default Search;