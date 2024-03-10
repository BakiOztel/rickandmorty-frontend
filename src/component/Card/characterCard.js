import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToBasket } from "../../store/favorite/favbasket.js";
import { toast } from 'react-toastify';
import "./card.css"
const CharacterCard = ({ data }) => {

    const { listItems } = useSelector(state => state.favlist)
    const dispatch = useDispatch();
    const AddFav = (data) => {
        if (listItems.length === 10) {
            toast.error("You have reached the maximum number of favorites")
        } else {
            const characterData = {
                id: data.id,
                name: data.name,
                image: data.image
            }
            dispatch(addToBasket(characterData))
            toast.success("Added to Favorites")
        }

    }

    return (
        <Card className="m-0 p-0 " style={{ height: "570px" }}>
            <Link to={`/character/${data.id}`}>
                <Card.Img variant="top" style={{ objectFit: "cover", height: "200px" }} src={data.image} />
            </Link>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>status : {data.status}</ListGroup.Item>
                    <ListGroup.Item>species : {data.species}</ListGroup.Item>
                    {data.type !== '' ? <ListGroup.Item>type : {data.type}</ListGroup.Item> : <></>}
                    <ListGroup.Item>gender : {data.gender}</ListGroup.Item>
                    <ListGroup.Item as={Link} to={"/deneme"}>location : {data.location.name}</ListGroup.Item>
                    <ListGroup.Item>gender : {data.gender}</ListGroup.Item>
                </ListGroup>
                <Button className="m-2" as={Link} to={`/character/${data.id}`} variant="primary">Details</Button>
                <Button onClick={() => { AddFav(data) }} className="pinkButton" > Add Favorite</Button>
            </Card.Body>
        </Card>
    );
}

export default CharacterCard;