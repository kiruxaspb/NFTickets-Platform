import React from 'react';
import { useInView } from 'react-intersection-observer';
import parse from 'html-react-parser';

function LineElement({ icon, header, color, info, position }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      {position ? (
        <div className="infoBlock" ref={ref}>
          <div className="icoName right">
            <h2 className={`${inView ? 'active' : ''}`}>{parse(header)}</h2>
            <div className={`light ${color} ${inView ? 'active' : ''}`}>
              <img src={icon} alt="icon" className={`${inView ? 'active' : ''}`} />
            </div>
          </div>

          <div className="linearTree right">
            <div className={`info ${inView ? 'active' : ''}`}>{parse(info)}</div>
            <div className={`line ${color} ${inView ? 'active' : ''}`}></div>
          </div>
        </div>
      ) : (
        <div className="infoBlock" ref={ref}>
          <div className="icoName">
            <div className={`light ${color} ${inView ? 'active' : ''}`}>
              <img src={icon} alt="icon" className={`${inView ? 'active' : ''}`} />
            </div>
            <h2 className={`${inView ? 'active' : ''}`}>{parse(header)}</h2>
          </div>

          <div className="linearTree">
            <div className={`line ${color} ${inView ? 'active' : ''}`}></div>
            <div className={`info ${inView ? 'active' : ''}`}>{parse(info)}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default LineElement;
