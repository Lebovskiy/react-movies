import React from "react";
import Search from "../components/Search";
import CardsList from "../components/CardsList";
import FiletType from "../components/FiletType";

const API_KEY = process.env.REACT_APP_API_KEY;


class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            moviesArr: [],
            preloader: true,
            filterT: ''
        }
    }

    searchCheck = (e) => {

        if (this.state.filterT.length === 0 && this.state.filterT === 'all') {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${e}`)
                .then(response => response.json())
                .then(res => {
                    this.setState({moviesArr: res.Search})
                })
        }else {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${e}&type=${this.state.filterT}`)
                .then(response => response.json())
                .then(res => {
                    this.setState({moviesArr: res.Search})
                })
        }
    }

    filterType = (e) => {
        this.setState({filterT: e})
    }

    render() {

        const {
            moviesArr,
        } = this.state;

        return (
            <main className="content container">
                Hello from movies app
                <Search searchCheck={this.searchCheck}/>
                <FiletType cb={this.filterType} type={this.state.filterT}/>




                { this.state.moviesArr.length ? <CardsList props={moviesArr}/> : <div> Пошук.. </div>}
            </main>
        )
    }
}

export default Main;