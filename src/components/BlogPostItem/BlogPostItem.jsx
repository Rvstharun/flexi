import React from 'react';
// import { Link } from 'react-router-dom';
import  './BlogPostItem.css';

const BlogPostItem = ({ id, title, summary, date, url }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="blogPostItem">
      <a to={url} className={"title"}>
        <h2>{title}</h2>
      </a>
      <p className={"summary"}>{summary}</p>
      <p className={"date"}>Published on {formattedDate}</p>
    </div>
  );
};

export default BlogPostItem;