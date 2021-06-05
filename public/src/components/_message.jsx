import React from 'react';

const index = ({ first, from }) => {
  return (
    <div className={`${from ? 'align-self-start' : 'align-self-end self'}  p-1 my-1 mx-3 rounded message-item`}>
      <div className={`msg d-flex ${from ? 'justify-content-start' : 'justify-content-end'}`}>
        <div className={`bubble ${from ? '' : 'alt'} ${first ? 'follow' : ''} `}>
          <div className={`txt`}>
            <span className={`message ${first ? 'follow' : ''}`}>Can you believe this amazing chat bubbles? It's all CSS.</span>
            <span className="timestamp">10:20 pm</span>
          </div>
          {first ? <div className={`bubble-arrow ${from ? '' : 'alt'}`}></div> : null}
        </div>
      </div>
    </div>
  );
};

export default index;
