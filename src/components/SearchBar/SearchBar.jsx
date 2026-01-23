import React, { useState, useCallback, useRef, useEffect } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch, placeholder = 'Search posts...' }) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);
  const debounceTimerRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Debounce the search to avoid excessive updates
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      onSearch(value);
    }, 300);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    setQuery('');
    onSearch('');
  };

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.searchContainer}>
      <form 
        className={`${styles.searchBar} ${isExpanded ? styles.expanded : ''}`}
        onSubmit={handleSearchSubmit}
      >
        <label htmlFor="search-input" className={styles.label}>
          Search
        </label>

        <div className={styles.inputWrapper}>
          <input
            ref={inputRef}
            id="search-input"
            type="text"
            className={styles.input}
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            aria-label="Search blog posts"
            aria-describedby="search-help"
          />

          {query && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Clear search"
              title="Clear search"
            >
              ✕
            </button>
          )}

          <button
            type="submit"
            className={styles.searchButton}
            aria-label="Search"
            title="Search"
          >
            🔍
          </button>
        </div>

        {isExpanded && (
          <button
            type="button"
            className={styles.cancelButton}
            onClick={handleCollapse}
            aria-label="Close search"
          >
            Cancel
          </button>
        )}
      </form>

      <button
        className={styles.mobileSearchIcon}
        onClick={toggleExpand}
        aria-label="Open search"
        aria-expanded={isExpanded}
        aria-controls="search-input"
      >
        🔍
      </button>

      <p id="search-help" className={styles.helpText}>
        Press Enter to search or type to search dynamically
      </p>
    </div>
  );
};

export default SearchBar;
