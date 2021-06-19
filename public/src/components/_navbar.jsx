import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateScreenView } from '../store/actions';

const Nav = () => {
  const dispatch = useDispatch();

  const { screen } = useSelector((state) => state.utilsState);

  const redirect = (data) => dispatch(updateScreenView(data));

  return (
    <div className="row d-flex flex-row align-items-center justify-content-between p-2 pr-3" id="navbar">
      {screen === 'CHAT_LIST' ? (
        <img
          src={'https://via.placeholder.com/400x400'}
          onClick={() => redirect('PROFILE')}
          alt="Profile Photo"
          className="img-fluid rounded-circle mr-2"
        />
      ) : null}
      {screen !== 'CHAT_LIST' ? <i className="fas fa-arrow-left" onClick={() => redirect('CHAT_LIST')}></i> : null}

      {screen !== 'GROUP' ? <i className="far fa-comments" onClick={() => redirect('GROUP')}></i> : null}

      {screen === 'GROUP' ? <div className="justify-self-start">Create Group</div> : null}
    </div>
  );
};
export default Nav;
