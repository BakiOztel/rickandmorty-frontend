import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const CharacterFrom = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        status: "",
        species: "",
        type: "",
        gender: ""
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const searchParams = new URLSearchParams(location.search);
        for (const key in formData) {
            if (formData[key] !== '') {
                if (searchParams.get(key)) {
                    searchParams.set(key, formData[key])
                } else {
                    searchParams.append(key, formData[key]);
                }
            }
        }
        navigate(`/character?${searchParams.toString()}`)
    };
    return (
        <Form onSubmit={handleSubmit}>
            <h1>Advanced Search</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>status</Form.Label>
                <Form.Control value={formData.status} name="status" onChange={handleInputChange} type="text" placeholder="Enter status" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>species</Form.Label>
                <Form.Control onChange={handleInputChange} name="species" value={formData.species} type="text" placeholder="Enter species" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>type</Form.Label>
                <Form.Control onChange={handleInputChange} name="type" value={formData.type} type="text" placeholder="Enter type" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>gender</Form.Label>
                <Form.Control onChange={handleInputChange} name="gender" value={formData.gender} type="text" placeholder="Enter gender" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
}

export default CharacterFrom;