import React from 'react';

import Nav from '../../../../components/_navbar';

import Image from './_image';
import Name from './_name';
import More from './_more';

const Profile = () => {
  return (
    <div className="overflow-auto" id="left-area">
      <Nav />

      <div className="row" id="profile">
        <Image />
        <Name />
        <More />
      </div>
    </div>
  );
};

export default Profile;
