import React from 'react';

import './index.scss';

function index({ name, type, onChange, title, value, maxLength, min, step, onClick }) {
  return (
    <div className={`input__data ${type}`}>
      <input
        type={type}
        name={name}
        required="required"
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        min={min}
        step={step}
        onClick={onClick}
      />
      <span htmlFor={name}>{title}</span>
      <i></i>
    </div>
  );
}

export default index;
