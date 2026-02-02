import React from 'react';
import BlogPostItem from '../BlogPostItem/BlogPostItem';
import './BlogPostList.css';

const BlogPostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className={"blogPostList"}>
      {posts.map((post) => (
        <BlogPostItem key={post.id} {...post} />
      ))}
    </div>
  );
};

export default BlogPostList;