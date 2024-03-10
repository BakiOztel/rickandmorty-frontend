import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PaginationComp from "../component/pagination/pagination.js";
import { getLocations } from "../store/location/location.js";
import LocationList from "../component/location/locationList.js";
const LocationPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const locations = useLocation();
    const [page, setPage] = useState(1);
    const { pageCount, isLoading } = useSelector(
        (state) => state.location
    );


    useEffect(() => {
        // Temel arama mantığı url bakarak yapılıyor
        // Url paramsları alıyorum ve bunları isteğe yöneltiyorum
        const params = new URLSearchParams(locations.search)
        const pageParam = parseInt(params.get('page')) || 1;
        //eğer page değeri girilmemişse başlangıç olarak 1 alıyorum 
        setPage(pageParam);

        dispatch(getLocations({ params: params.toString() }));
    }, [dispatch, locations.search]);

    const handlePageChange = (value) => {
        //sayfalama işlemleri için  yeni page değerini veriyorum 
        // navigate işlemiyle birlikte tekrardan cağırarak useEffect de dependency olarak verdiğim location ile tekrardan yükletiyorum
        setPage(value);

        const searchParams = new URLSearchParams(locations.search);
        searchParams.set('page', value.toString());

        if (value === 1) {
            searchParams.delete('page');
        }
        navigate(`/location?${searchParams.toString()}`);
    };

    return (
        <Container>
            <Row>
                <Row>
                    <h1>Locations</h1>
                </Row>
                <Row>
                    <LocationList />
                </Row>
            </Row>
            <Row className="justify-content-center" >
                {!isLoading && <PaginationComp totalPage={pageCount} onPageChange={handlePageChange} currentPage={page} />}
            </Row>
        </Container>
    );
}

export default LocationPage;