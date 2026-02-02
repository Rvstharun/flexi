import React, { useState } from 'react';
import BlogPostList from './components/BlogPostList/BlogPostList';
import './App.css';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    summary: 'A quick guide to useEffect, useState, and more.',
    date: '2024-10-10',
    content: 'This is the full content of the React Hooks post.',
  },
  {
    id: 2,
    title: 'JavaScript ES2025 Features',
    summary: 'Exploring the latest additions to JavaScript.',
    date: '2024-12-05',
    content: 'Here we describe new JS features coming in ES2025.',
  },
];

const App = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostClick = (id) => {
    setSelectedPostId((prev) => (prev === id ? null : id));
  };

  const selectedPost = blogPosts.find((post) => post.id === selectedPostId);

  return (
    
    <div className="app-container">
      <h1 className="app-title">My Blog</h1>

      <BlogPostList
        posts={blogPosts.map((post) => ({
          ...post,
          url: '#', // dummy since no router
        }))}
      />
      {selectedPost && (
        <div className="post-content">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={() => setSelectedPostId(null)}>Close</button>
        </div>
      )}
      <div className="post-links">
        {blogPosts.map((post) => (
          <button key={post.id} onClick={() => handlePostClick(post.id)}>
            {selectedPostId === post.id ? 'Hide' : 'Read'} "{post.title}"
          </button>
        ))}
      </div>
     </div>
  );
};

export default App;
