import React from "react";

function BlogCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <a href={"/detail/" + props.blogid}>
        <div className="card">
          <img src={props.img} className="card-img-top" alt="bg" />
          <div className="card-body row">
            <div className="col-12">
              <h1 className="card-title">{props.title}</h1>
            </div>
            <div className="col-12">
              <p className="card-text">{props.content}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default BlogCard;
