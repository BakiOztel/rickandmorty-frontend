import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getEpisodes } from "../store/episodes/episodes.js";
import EpisodeList from "../component/Episodes/EpisodeList.js";
import PaginationComp from "../component/pagination/pagination.js";
const Main = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [page, setPage] = useState(1);
    const { pageCount, isLoading } = useSelector(
        (state) => state.episodes
    );


    useEffect(() => {
        // Temel arama mantığı url bakarak yapılıyor
        // Url paramsları alıyorum ve bunları isteğe yöneltiyorum
        const params = new URLSearchParams(location.search)
        const pageParam = parseInt(params.get('page')) || 1;
        //eğer page değeri girilmemişse başlangıç olarak 1 alıyorum 
        setPage(pageParam);

        dispatch(getEpisodes({ params: params.toString() }));
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
        navigate(`?${searchParams.toString()}`);
    };

    return (
        <Container>
            <Row>
                <Row>
                    <h1>Episodes</h1>
                </Row>
                <Row>
                    <EpisodeList />
                </Row>
            </Row>
            <Row className="justify-content-center" >
                {!isLoading && <PaginationComp totalPage={pageCount} onPageChange={handlePageChange} currentPage={page} />}
            </Row>
        </Container>
    );
}

export default Main;