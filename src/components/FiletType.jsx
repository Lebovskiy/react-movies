import React from "react";

class FiletType extends React.Component{

    state = {
        filter: '',
        type: this.props.type
    }

    checkFilter = (e) => {
        this.setState({filter :  e.target.value});
        this.props.cb(  e.target.value);
        console.log(this.props.type);
    }


    render() {
        this.state.type = this.props.type;
        return(
            <div className='filter_type'>
                <label> <input type="radio" name='type' value='all' checked={this.state.filter === 'all'}  onChange={this.checkFilter} /> All </label>
                <label> <input type="radio" name='type' value='series' checked={this.state.filter === 'series'} onChange={this.checkFilter} /> Series </label>
                <label> <input type="radio" name='type' value='movie' checked={this.state.filter === 'movie'}  onChange={this.checkFilter} /> Films </label>
                <label> <input type="radio" name='type' value='game' checked={this.state.filter === 'game'}  onChange={this.checkFilter} /> Game </label>
            </div>
        )
    }
}

export default FiletType;