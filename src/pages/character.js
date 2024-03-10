import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCharacter } from "../store/character/character.js";
import CharacterList from "../component/character/CharacterList.js";
import CharacterFrom from "../component/character/CharacterForm.js";
import PaginationComp from "../component/pagination/pagination.js";
const CharacterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [page, setPage] = useState(1);
    const { pageCount, isLoading } = useSelector(state => state.character);
    useEffect(() => {
        // Temel arama mantığı url bakarak yapılıyor
        // Url paramsları alıyorum ve bunları isteğe yöneltiyorum
        const params = new URLSearchParams(location.search)
        const pageParam = parseInt(params.get('page')) || 1;
        //eğer page değeri girilmemişse başlangıç olarak 1 alıyorum 
        setPage(pageParam);

        dispatch(getCharacter({ params: params.toString() }));
    }, [dispatch, location.search]);

    const handlePageChange = (value) => {

        //sayfalama işlemleri için  yeni page değerini veriyorum 
        // navigate işlemiyle birlikte tekrardan cağırarak useEffect de dependency olarak verdiğim location ile tekrardan yükletiyorum
        setPage(value);

        const searchParams = new URLSearchParams(location.search);
        searchParams.set('page', value.toString());

        if (value === 1) {
            searchParams.delete('page');
        }
        navigate(`/character?${searchParams.toString()}`);
    };

    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <CharacterFrom />
                </Col>
                <Col lg={8}>
                    <Row>
                        <CharacterList />
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {!isLoading && <PaginationComp totalPage={pageCount} onPageChange={handlePageChange} currentPage={page} />}
            </Row>
        </Container>
    );
}

export default CharacterPage;