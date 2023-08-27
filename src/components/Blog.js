import React from "react";

function Course(props) {
  const {  featuredImage, title, filesource } = props.data;
  
  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <a href={filesource}>
        {/* <Link to={`courses/course-details/${id}/${getNospaceTitle(filesource)}`}> */}
          <img src={featuredImage} alt={title} />
        </a>
      </div>
      <div className="mi-blog-content">
        <h5>
          <a style={{'text-decoration':'none'}}  href={filesource}>
            {title}
          </a>
        </h5>
      </div>
    </div>
  );
}

export default Course;
