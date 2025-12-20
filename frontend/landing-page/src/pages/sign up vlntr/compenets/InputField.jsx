import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ 
  label, 
  name, 
  type = 'text', 
  icon, 
  placeholder, 
  required, 
  value, 
  onChange, 
  focusedField, 
  onFocus, 
  onBlur, 
  hint, 
  showPasswordToggle, 
  onPasswordToggle, 
  showPassword 
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
        <input
          type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => onFocus(name)}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`${styles.input} ${isFocused ? styles.inputFocused : ''}`}
          required={required}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onPasswordToggle}
            className={styles.passwordToggle}
          >
            <span className="material-symbols-outlined">
              {showPassword ? 'visibility' : 'visibility_off'}
            </span>
          </button>
        )}
      </div>
      {hint && <p className={styles.inputHint}>{hint}</p>}
    </div>
  );
};
export default InputField;
