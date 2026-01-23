import React, { useState } from 'react';
import styles from './CommentForm.module.css';

const CommentForm = ({ onSubmit, isLoggedIn = false, userName = '' }) => {
  const [name, setName] = useState(userName);
  const [text, setText] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!isLoggedIn && !name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!text.trim()) {
      newErrors.text = 'Comment cannot be empty';
    }

    if (text.trim().length > 1000) {
      newErrors.text = 'Comment must be less than 1000 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
    } else {
      setErrors({});
      onSubmit({
        name: name.trim(),
        text: text.trim(),
        date: new Date().toISOString(),
      });

      // Reset form after successful submission
      if (!isLoggedIn) {
        setName('');
      }
      setText('');
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Add a Comment</h3>

      {!isLoggedIn && (
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name <span className={styles.required}>*</span>
          </label>
          <input
            id="name"
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p className={styles.error} id="name-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>
      )}

      <div className={styles.formGroup}>
        <label htmlFor="comment" className={styles.label}>
          Comment <span className={styles.required}>*</span>
        </label>
        <textarea
          id="comment"
          className={styles.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your comment here..."
          rows="6"
          aria-invalid={!!errors.text}
          aria-describedby={errors.text ? 'comment-error' : undefined}
        />
        <div className={styles.charCount}>
          {text.length} / 1000 characters
        </div>
        {errors.text && (
          <p className={styles.error} id="comment-error" role="alert">
            {errors.text}
          </p>
        )}
      </div>

      <div className={styles.buttonGroup}>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
