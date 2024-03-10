import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import FavModal from "../favorite/favModal.js";
import { useState } from "react";

const FavCard = ({ data }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card className="m-0 p-0 ">
                <Link to={`/character/${data.id}`}>
                    <Card.Img variant="top" style={{ objectFit: "cover", height: "200px" }} src={data.image} />
                </Link>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Button as={Link} to={`/character/${data.id}`} variant="primary">Details</Button>
                    <Button variant="danger" onClick={handleShow}>Delete</Button>
                </Card.Body>
            </Card>
            <FavModal show={show} setShow={setShow} id={data.id} />
        </>
    );
}

export default FavCard;