import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({
  name,
  label,
  placeholder = '',
  type = 'text',
  value,
  onChange,
  error = ''
}) => {
  return (
    <div className="form__field">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <input
        className="form__input"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />

      {error && <small className="form__error">{error}</small>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'date']),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
