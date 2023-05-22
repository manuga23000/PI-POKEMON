import React from 'react';
import {
    PaginationContainer,
    PageButton,
    ArrowButton,
} from './StylePagination';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
            <PageButton
                key={i}
                onClick={() => handlePageChange(i)}
                active={currentPage === i}
            >
                {i}
            </PageButton>
        );
    }

    return (
        <PaginationContainer>
            <ArrowButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                style={{ visibility: currentPage <= 1 ? 'hidden' : 'visible' }}
            >
                &#x25C0;
            </ArrowButton>
            {pageButtons}
            <ArrowButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                style={{
                    visibility:
                        currentPage >= totalPages ? 'hidden' : 'visible',
                }}
            >
                &#x25B6;
            </ArrowButton>
        </PaginationContainer>
    );
};

export default Pagination;
