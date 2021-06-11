import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import Search from './_search';
import Image from './_image'
import Name from './_name'
import Nav from '../../../../components/_navbar';
const Group = ({ show }) => {
  const [state, setState] = useState({})

  const { list } = useSelector(state => state.contactsState)

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })

  const handleSearch = (e) => {
    let result = list.filter((item) => item.name.includes(e.target.value) || item.email.includes(e.target.value));
    let show = e.target.value ? true : false;
    setState({ ...state, search: e.target.value, show, result });
  };


  return (
    <div className={show ? "col-12 col-sm-5 col-md-4 d-flex flex-column h-100" : "d-none"}>
      <Nav />
      <div className="row px-3 h-100" id="group-container">
        <div className='h-100 w-100 d-flex flex-column justify-content-start flex-nowrap overflow-auto' style={{ overflowY: 'auto' }}>
          <Image update={(e) => setState({ ...state, image: e })} />
          <Search handleChange={handleSearch} value={state.search} options={state.options} show={state.show} />
          <Name handleChange={handleChange} value={state.name} />

        </div>

      </div>
    </div>
  );
};

export default Group;
