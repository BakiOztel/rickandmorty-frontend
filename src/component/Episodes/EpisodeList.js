import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import EpisodeCard from "../Card/episodeCard.js";

const EpisodeList = () => {

    const { episodes, isLoading, error } = useSelector(state => state.episodes)

    if (isLoading) return (
        <div>
            ...
        </div>
    );

    if (error) return (
        <div>
            Error : {error}
        </div>
    );
    if (!episodes.length) {
        return <div>
            No result found
        </div>
    }

    return (
        <Container>

            <Row>
                {
                    episodes.map((episode) => (
                        <Col lg={3}>
                            <EpisodeCard data={episode} />
                        </Col>
                    ))
                }
            </Row>
        </Container>

    );
}

export default EpisodeList;
