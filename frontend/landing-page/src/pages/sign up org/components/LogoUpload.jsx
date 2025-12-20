import React, { useState } from 'react';
import styles from './LogoUplouad.module.css';

export default function LogoUpload() {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.logoUploadContainer}>
      <label className={styles.logoInputLabel}>Logo</label>

      <div className={styles.logoUpload}>
        {preview ? (
          <img
            src={preview}
            alt="Logo preview"
            className={styles.logoPreview}
          />
        ) : (
          <>
            <span className={`material-symbols-outlined ${styles.logoIcon}`}>
              add_a_photo
            </span>
            <span className={styles.logoText}>Ajouter</span>
          </>
        )}

        <input
          type="file"
          accept="image/*"
          className={styles.fileInput}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
