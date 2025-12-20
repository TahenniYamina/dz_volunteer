import React from 'react';
import styles from './SelectField.module.css';

const SelectField = ({ 
  label, 
  name, 
  icon, 
  options, 
  required, 
  value, 
  onChange, 
  focusedField, 
  onFocus, 
  onBlur 
}) => {
  const isFocused = focusedField === name;

  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.inputWrapper}>
        <span 
          className={`material-symbols-outlined ${styles.inputIcon} ${isFocused ? styles.inputIconFocused : ''}`}
        >
          {icon}
        </span>
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => onFocus(name)}
          onBlur={onBlur}
          className={`${styles.select} ${isFocused ? styles.selectFocused : ''}`}
          required={required}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <span className={`material-symbols-outlined ${styles.selectArrow}`}>
          expand_more
        </span>
      </div>
    </div>
  );
};

export default SelectField;