import React from 'react';
import { Link } from 'react-router-dom';

function index({ path, children, className }) {
  return (
    <Link to={path}>
      <>
        <button className={className}>{children}</button>
      </>
    </Link>
  );
}

export default index;
