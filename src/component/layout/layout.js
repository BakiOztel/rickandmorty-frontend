import Header from "../header/header.js";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Layout = () => {

    return (
        <Container fluid    >
            <Row>
                <Header />
            </Row>
            <Row className="pt-5 mt-5">
                <Outlet />
            </Row>
            <ToastContainer />
        </Container>
    );
}

export default Layout;