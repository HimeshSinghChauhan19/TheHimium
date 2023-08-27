import React, { useState} from "react";

import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PortfoliosView from "../components/PortfoliosView";
import database from '../data/db/database';

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(9);
  const portfolios=database.portfolios;


  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolios.slice(indexOfFirstPortfolios, indexOfLastPortfolios);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Results" />
          <PortfoliosView portfolios={currentPortfolios}/>
          {!(portfolios.length > portfoliosPerPage) ? null : (
            <Pagination 
              className="mt-50"
              itemsPerPage={portfoliosPerPage}
              totalItems={portfolios.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
