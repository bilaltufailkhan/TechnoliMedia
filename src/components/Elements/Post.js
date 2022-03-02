import React from "react";

import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="post">
      <div
        className="post__img"
        style={{
          background: `url('${props.url}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="post__content">
        <p className="date">{props.date}</p>
        <h6 className="post__heading">{props.heading}</h6>
        <p className="post__content">{props.content}</p>
        <Link to="/">
          Read More&nbsp;&nbsp; <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Post;
