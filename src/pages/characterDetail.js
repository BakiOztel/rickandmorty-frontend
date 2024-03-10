import { Link, useParams } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useGetCharacterQuery } from "../api/characterApi.js";

const CharacterDetailPage = () => {

    const { id } = useParams();
    const { data, isSuccess, isLoading } = useGetCharacterQuery(id);

    if (isLoading) return (
        <div>
            yükleniyor
        </div>
    );

    const lastNumbers = data.episode.map(link => link.split("/").filter(Boolean).pop());
    const lastNumberLocation = data.location.url.split("/").filter(Boolean).pop();
    return (

        <Container>
            {isSuccess ? <Row>
                <Col lg={4}>
                    <Image style={{ objectFit: "cover" }} className="w-75" src={data.image} />
                </Col>
                <Col lg={8}>
                    <Container>
                        <Row>
                            <h1> {data.name}</h1>
                        </Row>
                        <Row>
                            <h3>Status : {data.status}</h3>
                        </Row>
                        <Row>
                            <h3>Species : {data.species}</h3>
                        </Row>
                        <Row>
                            <h3>Type : {data.type}</h3>
                        </Row>
                        <Row>
                            <h3>Gender : {data.gender}</h3>
                        </Row>
                        <Row>

                            <Link to={`/location/${lastNumberLocation}`}><h3>{data.location.name}</h3></Link>
                        </Row>
                        <Row>
                            <Row>
                                <h3> Episode Count:{lastNumbers.length}</h3>
                            </Row>
                            <Row>
                                {lastNumbers.map((data) => (
                                    <Col lg={2}>
                                        <Link to={`/episode/${data}`}> Episode :{data} </Link>
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

export default CharacterDetailPage;