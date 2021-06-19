import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from '../../../../store/actions';

const Image = ({ image, update }) => {
  const dispatch = useDispatch();

  const hiddenFileInput = useRef(null);

  const [state, setState] = useState({});

  const handleImage = (e) => hiddenFileInput.current.click();

  const handleImageChange = (e) =>
    e.target.files[0].type.split('/')[0] === 'image'
      ? setState({ ...state, image: e.target.files[0], preview: URL.createObjectURL(e.target.files[0]) }, update(e.target.files[0]))
      : dispatch(showAlert('Only images are accepted'));

  return (
    <>
      <input type="file" autoComplete="off" className="d-none" onChange={handleImageChange} ref={hiddenFileInput} />
      <img
        alt="Profile Photo"
        src={state.preview || image || 'https://via.placeholder.com/400x400'}
        className="img-fluid rounded-circle my-5 justify-self-center mx-auto group-pic"
        onClick={handleImage}
      />
    </>
  );
};

export default Image;
