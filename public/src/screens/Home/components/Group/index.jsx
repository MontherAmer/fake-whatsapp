import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createGroup, updateScreenView } from '../../../../store/actions';

import Search from './_search';
import Image from './_image';
import Name from './_name';
import Nav from '../../../../components/_navbar';
const Group = ({ show }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ users: [], selectedIds: [] });

  const { list } = useSelector((state) => state.contactsState);

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleSearch = (e) => {
    let users = list.filter((item) => item.type === 'User' && !state.selectedIds.includes(item.userId));
    let options = users.filter((item) => item.name.includes(e.target.value) || item.email.includes(e.target.value));
    let show = e.target.value ? true : false;
    setState({ ...state, search: e.target.value, show, options });
  };

  const handleUsers = (i) => {
    setState({
      ...state,
      selectedIds: [...state.selectedIds, state.options[i].userId],
      users: [...state.users, state.options[i]],
      search: '',
      show: false,
    });
  };

  const submit = async () => {
    await dispatch(createGroup(state));
    setState({ ...state, users: [], selectedIds: [], search: '', show: false, name: '', image: null });
    dispatch(updateScreenView('CHAT_LIST'));
  };

  return (
    <div className={show ? 'col-12 col-sm-5 col-md-4 d-flex flex-column h-100' : 'd-none'}>
      <Nav />
      <div className="row px-3 h-100" id="group-container">
        <div className="h-100 w-100 d-flex flex-column justify-content-start flex-nowrap overflow-auto" style={{ overflowY: 'auto' }}>
          <Image update={(e) => setState({ ...state, image: e })} image={state.image} />
          <Name handleChange={handleChange} value={state.name} />
          <Search
            handleChange={handleSearch}
            value={state.search}
            options={state.options}
            handleClick={handleUsers}
            show={state.show}
            options={state.options}
            users={state.users}
          />
          {state.name && state.selectedIds.length ? <button onClick={submit}>Create</button> : null}
        </div>
      </div>
    </div>
  );
};

export default Group;
