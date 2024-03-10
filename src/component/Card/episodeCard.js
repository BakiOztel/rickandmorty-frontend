import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const EpisodeCard = ({ data }) => {

    // api de episode değerinin image bulunmadığı için characterlerden random bir tanesinin fotoğrafını koydum 
    return (
        <Card className="m-0 p-0 ">
            <Link to={`/episode/${data.id}`}>
                <Card.Img variant="top" style={{ objectFit: "cover", height: "200px" }} src="https://rickandmortyapi.com/api/character/avatar/118.jpeg" />
            </Link>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    Episode : {data.episode}
                </Card.Text>
                <Button as={Link} to={`episode/${data.id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default EpisodeCard;