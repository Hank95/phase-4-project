import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";

const PER_PAGE = 4;
const Products = ({ products, handleAddCart }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [tags, setTags] = useState("all");

  // Pagination
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = products.slice(offset, offset + PER_PAGE);

  const pageCount = Math.ceil(products.length / PER_PAGE);

  // // Filter
  // useEffect(() => {
  //   fetch("/tags")
  //     .then((res) => res.json())
  //     .then((json) => setTags(json));
  // }, []);

  return (
    <div>
      <FilterBar> Filter Search</FilterBar>
      <Container>
        {currentPageData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddCart={handleAddCart}
          />
        ))}
      </Container>
      <Wrapper>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </Wrapper>
    </div>
  );
};

const FilterBar = styled.div`
  width: 100%;
  height: 10%;
`;
const Container = styled.div`
  margin-left: 12.5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2vh;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
export default Products;
