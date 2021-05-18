import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({
  label,
  name,
  defaultValue = '',
  options,
  onChange,
  error = ''
}) => {
  return (
    <div className="form__field">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <select
        className="form__input form__input--select"
        name={name}
        id={name}
        onBlur={onChange}
        defaultValue={defaultValue}
      >
        {options.map(({ title, value }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
      {error && <small className="form__error">{error}</small>}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  error: PropTypes.string
};
