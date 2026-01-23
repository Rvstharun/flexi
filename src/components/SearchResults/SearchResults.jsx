import React from 'react';
import styles from './SearchResults.module.css';

const SearchResults = ({ results, query, isLoading = false }) => {
  const highlightQuery = (text, query) => {
    if (!query || !text) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  const getContentSnippet = (content, query, maxLength = 150) => {
    if (!query) {
      return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
    }

    const lowerContent = content.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerContent.indexOf(lowerQuery);

    let snippet;
    if (index !== -1) {
      const start = Math.max(0, index - 50);
      const end = Math.min(content.length, index + query.length + 100);
      snippet = (start > 0 ? '...' : '') + content.substring(start, end) + (end < content.length ? '...' : '');
    } else {
      snippet = content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
    }

    return snippet;
  };

  if (isLoading) {
    return (
      <div className={styles.loadingState} role="status" aria-live="polite">
        <p>Searching...</p>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className={styles.emptyState} role="status" aria-live="polite">
        <h3>No Posts Found</h3>
        {query && (
          <p>No results found for "<strong>{query}</strong>". Try a different search term.</p>
        )}
        {!query && (
          <p>Start typing to search for blog posts by title or content.</p>
        )}
      </div>
    );
  }

  return (
    <div className={styles.searchResults} role="region" aria-label="Search results">
      <div className={styles.resultCount} role="status" aria-live="polite">
        Found <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''} for "<strong>{query}</strong>"
      </div>

      <div className={styles.resultsList}>
        {results.map((post, index) => (
          <article key={index} className={styles.resultItem}>
            <h3 className={styles.resultTitle}>
              <a 
                href={`/blog/${post.id || index}`}
                dangerouslySetInnerHTML={{
                  __html: highlightQuery(post.title, query)
                }}
              />
            </h3>

            <p className={styles.resultSnippet}>
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightQuery(getContentSnippet(post.content, query), query)
                }}
              />
            </p>

            <div className={styles.resultMeta}>
              <span className={styles.author}>
                By <strong>{post.author}</strong>
              </span>
              <span className={styles.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
