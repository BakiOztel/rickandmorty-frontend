import { Link, useParams } from "react-router-dom";
import { useGetEpisodeQuery } from "../api/episodeApi.js";
import { Col, Container, Image, Row } from "react-bootstrap";

const EpisodePage = () => {

    const { id } = useParams();
    const { data, isSuccess, isLoading } = useGetEpisodeQuery(id);

    if (isLoading) return (
        <div>
            yükleniyor
        </div>
    );

    const lastNumbers = data.characters.map(link => link.split("/").filter(Boolean).pop());

    return (

        // Episodelerin Fotoğrafları olmadığı için random bir karakter fotosu seçtim
        <Container>
            {isSuccess ? <Row>
                <Col lg={4}>

                    <Image style={{ objectFit: "cover" }} className="w-75" src="https://rickandmortyapi.com/api/character/avatar/121.jpeg" />
                </Col>
                <Col lg={8}>
                    <Container>
                        <Row>
                            <h1> {data.name}</h1>
                        </Row>
                        <Row>
                            <h3>Episode : {data.episode}</h3>
                        </Row>
                        <Row>
                            <h3>Release date : {data.air_date}</h3>
                        </Row>
                        <Row>
                            <Row>
                                <h3> Number of characters in the section: {lastNumbers.length}</h3>
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

export default EpisodePage;