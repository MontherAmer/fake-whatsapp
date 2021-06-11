import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfile, logOut } from '../../../../store/_actions';
import { ThemeContext } from '../../../../context/ThemeContext';

import More from './_more';
import Name from './_name';
import Image from './_image';
import Nav from '../../../../components/_navbar';

const Profile = ({ show }) => {
  const dispatch = useDispatch();

  const { image, name } = useSelector((state) => state.userState);

  const { updateMode, darkMode } = useContext(ThemeContext);

  const handleUpdate = (e) => dispatch(updateProfile(e));

  const signOut = () => dispatch(logOut());

  return (
    <div className={show ? "col-12 col-sm-5 col-md-4 d-flex flex-column" : "d-none"} id="left-area">
      <Nav />
      <div className="row overflow-auto" id="profile">
        <Image image={image} update={handleUpdate} />
        <Name name={name} update={handleUpdate} />
        <More updateMode={updateMode} darkMode={darkMode} signOut={signOut} />
      </div>
    </div>
  );
};

export default Profile;
