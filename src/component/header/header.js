import { useState } from 'react';
import { Navbar, Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const params = new URLSearchParams(location.search);
        // append ile eklediğim zaman üst üstte 2 tane değer biniyor o yüzden check ediyorum
        if (params.get("name") !== null) {
            params.set("name", searchTerm);
        } else {
            params.append("name", searchTerm)
        }
        navigate(`?${params.toString()}`)

    };
    return (
        <Navbar className='pt-4 px-3 ' fixed="top" bg="dark" data-bs-theme="dark">
            <Container fluid >
                <Row className='w-100'>
                    <Col lg={2}>
                        <Navbar.Brand as={Link} to="/">RickandMortyApp</Navbar.Brand>
                    </Col>
                    <Col lg={7}>
                        <Form onSubmit={handleSubmit}  >
                            <Row>
                                <Col lg={10}>
                                    <Form.Control value={searchTerm} onChange={handleInputChange} type='text' placeholder='search' />

                                </Col>
                                <Col>
                                    <Button variant='light' type='submit'>Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={3}>
                        <Row>
                            <Col lg={3}>
                                <Button variant='light' as={Link} to={"/"}> Episode</Button>
                            </Col>
                            <Col lg={3}>
                                <Button variant='light' as={Link} to={"/character"}> Character</Button>
                            </Col>
                            <Col lg={3}>
                                <Button variant='light' to={"/location"} as={Link}> Location</Button>
                            </Col>
                            <Col lg={3}>
                                <Button variant='light' as={Link} to={"/favorite"}> Favorite</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Header