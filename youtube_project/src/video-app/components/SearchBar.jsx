import React from "react";
import { ReactDOM } from "react";

class SearchBar extends React.Component {

    state = {term: ''}

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onSubmitted = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)
    }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitted} action="" className="ui form">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input type="text" onChange={this.onInputChange} value={this.state.term}  />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
