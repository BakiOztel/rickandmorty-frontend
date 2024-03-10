import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComp = ({ totalPage, currentPage, onPageChange }) => {
    const [activePage, setActivePage] = useState(currentPage);
    const [visiblePages, setVisiblePages] = useState(5);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        onPageChange(pageNumber);
    };
    const renderPaginationItems = () => {
        const items = [];

        // İlk 5 sayfa
        for (let number = 1; number <= Math.min(visiblePages, totalPage); number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === activePage}
                    onClick={() => handlePageChange(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }

        //  ekleyerek ara sayfaları gizleme
        if (totalPage > visiblePages + 2) {
            items.push(<Pagination.Ellipsis key="ellipsis1" />);
        }

        // Son 5 sayfa
        for (let number = totalPage - Math.min(visiblePages, totalPage) + 1; number <= totalPage; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === activePage}
                    onClick={() => handlePageChange(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }

        return items;
    };

    return (
        <Pagination className='justify-content-center' style={{ width: "400px" }}>
            <Pagination.Prev
                onClick={() => handlePageChange(activePage - 1)}
                disabled={activePage === 1}
            />
            {renderPaginationItems()}
            <Pagination.Next
                onClick={() => handlePageChange(activePage + 1)}
                disabled={activePage === totalPage}
            />
        </Pagination>
    );
}

export default PaginationComp;