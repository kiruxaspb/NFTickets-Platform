import React from 'react';
import { Link } from 'react-router-dom';

function index({ path, children, className, onClick }) {
  return (
    <Link to={path}>
      <>
        <button className={className} onClick={onClick}>
          {children}
        </button>
      </>
    </Link>
  );
}

export default index;
