import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfile, logOut } from '../../../../store/_actions';
import { ScreenContext } from '../../../../context/ScreenContext';

import More from './_more';
import Name from './_name';
import Image from './_image';
import Nav from '../../../../components/_navbar';

const Profile = () => {
  const dispatch = useDispatch();

  const { image, name } = useSelector((state) => state.userState);

  const { updateMode, darkMode } = useContext(ScreenContext);

  const handleUpdate = (e) => dispatch(updateProfile(e));

  const signOut = () => dispatch(logOut());

  return (
    <div className="overflow-auto" id="left-area">
      <Nav />
      <div className="row" id="profile">
        <Image image={image} update={handleUpdate} />
        <Name name={name} update={handleUpdate} />
        <More updateMode={updateMode} darkMode={darkMode} signOut={signOut} />
      </div>
    </div>
  );
};

export default Profile;
