import { Link, useParams } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useGetLocationQuery } from "../api/locationApi.js";

const LocationDetail = () => {

    const { id } = useParams();
    const { data, isSuccess, isLoading } = useGetLocationQuery(id);

    if (isLoading) return (
        <div>
            ....
        </div>
    );

    const lastNumbers = data.residents.map(link => link.split("/").filter(Boolean).pop());

    return (

        <Container>
            {isSuccess ? <Row>
                <Col lg={4}>
                    <Image style={{ objectFit: "cover" }} className="w-75" src="https://rickandmortyapi.com/api/character/avatar/119.jpeg" />
                </Col>
                <Col lg={8}>
                    <Container>
                        <Row>
                            <h1> {data.name}</h1>
                        </Row>
                        <Row>
                            <h3>Type : {data.type}</h3>
                        </Row>
                        <Row>
                            <h3>dimension : {data.dimension}</h3>
                        </Row>
                        <Row>
                            <Row>
                                <h3> Character Count:{lastNumbers.length}</h3>
                            </Row>
                            <Row>
                                {lastNumbers.map((data) => (
                                    <Col lg={2}>
                                        <Link to={`/character/${data}`}> Character :{data} </Link>
                                        <hr />
                                    </Col>
                                ))}
                            </Row>
                        </Row>
                    </Container>
                </Col>
            </Row> : <div> yükleniyor</div>}
        </Container>
    );
}

export default LocationDetail;