import React, { useEffect, useRef } from 'react';
import styles from './ConfirmationDialog.module.css';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm, isDeleting = false }) => {
  const dialogRef = useRef(null);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        ref={dialogRef}
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="dialog-title" className={styles.title}>
          Confirm Deletion
        </h2>
        <p id="dialog-description" className={styles.description}>
          Are you sure you want to delete this post? This action cannot be undone.
        </p>
        <div className={styles.buttons}>
          <button
            className={styles.cancelButton}
            onClick={onClose}
            disabled={isDeleting}
            ref={cancelButtonRef}
          >
            Cancel
          </button>
          <button
            className={styles.confirmButton}
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
