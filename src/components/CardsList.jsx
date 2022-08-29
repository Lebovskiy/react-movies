import Card from "../components/Card";

function CardsList(props) {


    let list = props.props.map( function (item) {
        return <Card props={item} key={item.imdbID}/>
    })

    return (
        <>
            {list}
        </>
    )

}

export default CardsList;
