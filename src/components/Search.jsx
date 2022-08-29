import React from "react";

class Search extends React.Component{

    constructor() {
        super();
        this.state = {
            searchValue: ''
        };
    }


    render() {
        return(
            <div className="search_wrapper">
                <input type="text"  value={this.state.searchValue} onInput={(e) => { this.setState( { searchValue: e.target.value } )}}/>
                <button onClick={() => {this.props.searchCheck(this.state.searchValue)}}> Search</button>
            </div>
        )
    }
}

export default Search;