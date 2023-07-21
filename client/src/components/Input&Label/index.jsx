import React from 'react';

import './index.scss';

function index({ name, type, onChange, title, value }) {
  return (
    <div className={`input__data ${type}`}>
      <input type={type} name={name} required="required" onChange={onChange} value={value} />
      <span htmlFor={name}>{title}</span>
      <i></i>
    </div>
  );
}

export default index;
