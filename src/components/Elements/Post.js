import React from "react";

import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="post">
      {/* <div
        className="post__img"
        style={{
          background: `url("${props.url}")`,
          background: "#d8d8d8",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "250px",
        }}
      ></div> */}
      <div className="post__content">
        <img
          src={props.url}
          width="100%"
          height="auto"
          style={{ marginBottom: "1rem" }}
        />
        <p className="date">{props.date}</p>
        <Link to="/singlepost" className="post__heading">
          <h6>{props.heading}</h6>
        </Link>
        <p className="post__content">{props.content}</p>
        <Link to="/singlepost" className="readMore__post">
          Read More&nbsp;&nbsp; <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Post;
