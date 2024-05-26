import React from 'react';
import './pagination.css'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, paginate }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            paginate(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button className="pagination-button" onClick={handlePrevious} disabled={currentPage === 1}>
                Previous
            </button>
            {[...Array(totalPages).keys()].map((number) => (
                <button
                    key={number + 1}
                    onClick={() => paginate(number + 1)}
                    className={`pagination-button ${currentPage === number + 1 ? 'active' : ''}`}
                >
                    {number + 1}
                </button>
            ))}
            <button className="pagination-button" onClick={handleNext} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
