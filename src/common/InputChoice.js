import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  name,
  type = 'radio',
  options = [],
  onChange,
  error = ''
}) => {
  return (
    <div className="form__field">
      <p className="form__label">{label}</p>
      {options.map(option => (
        <span key={option?.value}>
          <input
            className={('input', `input--${type}`)}
            id={`${name}-${option?.value}`}
            type={type}
            value={option?.value}
            name={name}
            onChange={onChange}
          />
          <label htmlFor={`${name}-${option?.value}`}>{option?.title}</label>
        </span>
      ))}
      {error && <small className="form__error">{error}</small>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.string
};

export default Input;
