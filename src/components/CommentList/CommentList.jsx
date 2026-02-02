import React from 'react';
import Comment from '../Comment/Comment';
import styles from './CommentList.module.css';

const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No comments yet. Be the first to comment!</p>
      </div>
    );
  }

  return (
    <div className={styles.commentList} role="region" aria-label="Comments section">
      <h3 className={styles.title}>Comments ({comments.length})</h3>
      <div className={styles.comments}>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            date={comment.date}
            text={comment.text}
            avatar={comment.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
