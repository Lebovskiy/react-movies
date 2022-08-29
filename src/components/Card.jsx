import React from "react";

function Card(props){
    const {
        Poster: poster,
        Title: title,
        Type: type,
        Year: year,
        imdID
    } = props.props

    return(
        <>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={poster} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{ title }</span>
                    <p>{type}</p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i
                        className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        </>
    )
}

export default Card;