import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CharacterCard from "../Card/characterCard.js";

const CharacterList = () => {

    const { character, isLoading, error } = useSelector(state => state.character)

    if (isLoading) return (
        <div>
            yükleniyor
        </div>
    );

    if (error) return (
        <div>
            Error : {error}
        </div>
    );
    if (!character.length) {
        return <div>
            No result found
        </div>
    }

    return (
        <Container>

            <Row>
                {
                    character.map((episode) => (
                        <Col lg={3}>
                            <CharacterCard data={episode} />
                        </Col>
                    ))
                }
            </Row>
        </Container>

    );
}

export default CharacterList;
