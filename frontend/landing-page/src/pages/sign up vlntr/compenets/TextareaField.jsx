import React from 'react';
import styles from './TextareaField.module.css';

const TextareaField = ({ 
  label, 
  name, 
  placeholder, 
  required, 
  value, 
  onChange, 
  focusedField, 
  onFocus, 
  onBlur, 
  hint 
}) => {
  const isFocused = focusedField === name;

  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => onFocus(name)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`${styles.textarea} ${isFocused ? styles.textareaFocused : ''}`}
        required={required}
      />
      {hint && <p className={styles.inputHint}>{hint}</p>}
    </div>
  );
};

export default TextareaField;
