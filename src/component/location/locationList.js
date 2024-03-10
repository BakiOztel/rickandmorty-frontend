import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import LocationCard from "../Card/locationCard.js";

const LocationList = () => {

    const { location, isLoading, error } = useSelector(state => state.location)

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
    if (!location.length) {
        return <div>
            <h1>No result found</h1>
        </div>
    }

    return (
        <Container>

            <Row>
                {
                    location.map((data) => (
                        <Col lg={3}>
                            <LocationCard data={data} />
                        </Col>
                    ))
                }
            </Row>
        </Container>

    );
}

export default LocationList;
