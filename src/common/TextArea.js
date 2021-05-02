import React from 'react';
import PropTypes from 'prop-types';

export const TextArea = ({
  label,
  name,
  placeholder = '',
  value,
  onChange,
  error = ''
}) => {
  return (
    <div className="form__field">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <textarea
        className="form__input form__input--textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
      {error && <small className="form__error">{error}</small>}
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
