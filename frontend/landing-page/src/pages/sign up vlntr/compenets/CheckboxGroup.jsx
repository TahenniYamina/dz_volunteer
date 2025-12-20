import React from 'react';
import styles from './CheckboxGroup.module.css';

const CheckboxGroup = ({ 
  label, 
  required, 
  options, 
  selectedValues, 
  onToggle 
}) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.checkboxGroup}>
        {options.map(option => (
          <label
            key={option}
            className={`${styles.checkboxLabel} ${
              selectedValues.includes(option) ? styles.checkboxLabelChecked : ''
            }`}
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(option)}
              onChange={() => onToggle(option)}
              className={styles.checkbox}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
