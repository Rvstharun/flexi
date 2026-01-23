import React, { useState, useEffect } from 'react';
import styles from './BlogPostForm.module.css';

const BlogPostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [author, setAuthor] = useState(post?.author || '');
  const [date, setDate] = useState(post?.date || '');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (post) {
      setTitle(post.title || '');
      setContent(post.content || '');
      setAuthor(post.author || '');
      // Format date for input if it's a Date object or ISO string
      if (post.date) {
        const dateObj = new Date(post.date);
        const formattedDate = dateObj.toISOString().split('T')[0];
        setDate(formattedDate);
      }
    }
  }, [post]);

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!content.trim()) {
      newErrors.content = 'Content is required';
    }

    if (!author.trim()) {
      newErrors.author = 'Author name is required';
    }

    if (!date) {
      newErrors.date = 'Publication date is required';
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
      onSubmit({ title, content, author, date });
      setIsSubmitting(false);
      // Reset form after successful submission
      setTitle('');
      setContent('');
      setAuthor('');
      setDate('');
    }
  };

  const isEditMode = !!post;

  return (
    <form className={styles.blogPostForm} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>
        {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
      </h2>

      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.label}>
          Title <span className={styles.required}>*</span>
        </label>
        <input
          id="title"
          type="text"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog post title"
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? 'title-error' : undefined}
        />
        {errors.title && (
          <p className={styles.error} id="title-error" role="alert">
            {errors.title}
          </p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="author" className={styles.label}>
          Author <span className={styles.required}>*</span>
        </label>
        <input
          id="author"
          type="text"
          className={styles.input}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
          aria-invalid={!!errors.author}
          aria-describedby={errors.author ? 'author-error' : undefined}
        />
        {errors.author && (
          <p className={styles.error} id="author-error" role="alert">
            {errors.author}
          </p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="date" className={styles.label}>
          Publication Date <span className={styles.required}>*</span>
        </label>
        <input
          id="date"
          type="date"
          className={styles.input}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? 'date-error' : undefined}
        />
        {errors.date && (
          <p className={styles.error} id="date-error" role="alert">
            {errors.date}
          </p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="content" className={styles.label}>
          Content <span className={styles.required}>*</span>
        </label>
        <textarea
          id="content"
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter blog post content"
          rows="10"
          aria-invalid={!!errors.content}
          aria-describedby={errors.content ? 'content-error' : undefined}
        />
        {errors.content && (
          <p className={styles.error} id="content-error" role="alert">
            {errors.content}
          </p>
        )}
      </div>

      <div className={styles.buttonGroup}>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : isEditMode ? 'Update Post' : 'Create Post'}
        </button>
      </div>
    </form>
  );
};

export default BlogPostForm;
