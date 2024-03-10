import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const LocationCard = ({ data }) => {

    // api de location değerinin image bulunmadığı için characterlerden random bir tanesinin fotoğrafını koydum 
    return (
        <Card className="m-0 p-0 ">
            <Link to={`/location/${data.id}`}>

                <Card.Img variant="top" style={{ objectFit: "cover", height: "200px" }} src="https://rickandmortyapi.com/api/character/avatar/109.jpeg" />
            </Link>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    type : {data.type}
                </Card.Text>
                <Button as={Link} to={`/location/${data.id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default LocationCard;