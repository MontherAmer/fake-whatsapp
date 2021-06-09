import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showAlert, updateProfile } from '../../../../store/_actions';

const Image = () => {
  const dispatch = useDispatch();

  const hiddenFileInput = useRef(null);

  const [state, setState] = useState({});

  const { image } = useSelector((state) => state.userState);

  const handleImage = (e) => hiddenFileInput.current.click();

  const handleImageChange = (e) =>
    e.target.files[0].type.split('/')[0] === 'image'
      ? setState(
          { ...state, image: e.target.files[0], preview: URL.createObjectURL(e.target.files[0]) },
          dispatch(updateProfile({ image: e.target.files[0] }))
        )
      : dispatch(showAlert('Only images are accepted'));

  return (
    <>
      <input type="file" id="profile-pic-input" className="d-none" onChange={handleImageChange} ref={hiddenFileInput} />
      <img
        alt="Profile Photo"
        src={state.preview || image || 'https://via.placeholder.com/400x400'}
        className="img-fluid rounded-circle my-5 justify-self-center mx-auto profile-pic"
        onClick={handleImage}
      />
    </>
  );
};

export default Image;
