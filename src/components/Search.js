import React from "react";

class Search extends React.Component {
    render() {
        return(
            <div className="search-form-container">
                <form className="search-form" onSubmit={this.props.getForecast}>
                    <input type="text" name="city" placeholder="Type city..."></input>
                    <input type="text" name="country" placeholder="Type Country..."></input>
                    <button>See Forecast</button>
                </form>
            </div>
        );
    }
}

export default Search;