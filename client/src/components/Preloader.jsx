import React from 'react';
import { useSelector } from 'react-redux';

import spin from '../assets/images/spin.svg';

function Preloader() {
  const isLoading = useSelector((state) => state.SpinStatusSlice.isLoading);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <img src={spin} alt="Loading" />
        </div>
      )}
    </>
  );
}

export default Preloader;
