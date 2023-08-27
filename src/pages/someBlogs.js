import React, { useState} from "react";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import CoursesView from "../components/CoursesView";
import Pagination from "../components/Pagination";
import database from '../data/db/database';

function Courses() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const posts=database.courses;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  return (
    <Layout>
      {/* <h1>This is h1...</h1> */}
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Some Blogs" />
          <CoursesView courses={currentPosts} />
          {!(posts.length > postsPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={postsPerPage}
              totalItems={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
    
  );
}

export default Courses;
