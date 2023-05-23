import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setShowModal } from '../redux/slices/ShowModalSlice';

import success from '../assets/images/success.svg';
import error from '../assets/images/error.svg';

function Modal() {
  const dispatch = useDispatch();

  const showModal = useSelector((state) => state.ShowModalSlice.showModal);
  const isTrueQR = useSelector((state) => state.QRStateSlice.isTrue);
  const [currentImg, setCurrentImg] = React.useState(null);

  const handleCloseModal = () => {
    dispatch(setShowModal(false));
  };

  const handleOpenModal = () => {
    dispatch(setShowModal(true));
  };

  React.useEffect(() => {
    isTrueQR === true ? setCurrentImg(success) : setCurrentImg(error);
  }, [isTrueQR]);

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Статус</h2>
              <span className="modal-close" onClick={handleCloseModal}>
                &times;
              </span>
            </div>
            <div className="modal-status">
              <p>{`${isTrueQR}`}</p>
              <img src={currentImg}></img>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
