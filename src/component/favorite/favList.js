import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import EpisodeCard from "../Card/episodeCard.js";
import FavCard from "../Card/favCard.js";

const FavList = () => {

    const { listItems } = useSelector(state => state.favlist)



    return (
        <Container>
            {listItems.length === 0 ? <Row>
                <h2>Favorite character has not been selected yet.</h2>
            </Row>
                :
                <>
                    <Row>
                        <h2>My Favorite Characters</h2>
                    </Row>
                    <Row>
                        {
                            listItems.map((data) => (
                                <Col lg={3}>
                                    <FavCard data={data} />
                                </Col>
                            ))
                        }
                    </Row>
                </>
            }
        </Container>
    );
}

export default FavList;
