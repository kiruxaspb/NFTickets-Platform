import React from 'react';

import './index.scss';

function index({ name, type, onChange, title }) {
  return (
    <div className={`input__data ${type}`}>
      <input type={type} name={name} required="required" onChange={onChange} />
      <span htmlFor={name}>{title}</span>
      <i></i>
    </div>
  );
}

export default index;
