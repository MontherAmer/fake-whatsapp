import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
  const { loader } = useSelector((state) => state.utilsState);

  useEffect(() => {}, [loader]);

  return (
    <div id="startup" style={{ display: loader ? 'flex' : 'none' }}>
      <svg class="spinner-container" width="65px" height="65px" viewBox="0 0 52 52">
        <circle class="path" cx="26px" cy="26px" r="20px" fill="none" stroke-width="4px" />
      </svg>
    </div>
  );
};
export default Loader;
