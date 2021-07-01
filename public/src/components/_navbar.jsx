import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateScreenView } from '../store/actions';

const Nav = () => {
  const dispatch = useDispatch();

  const { screen, sm } = useSelector((state) => state.utilsState);
  const { image } = useSelector((state) => state.userState);

  const redirect = (data) => dispatch(updateScreenView(data));
  return (
    <div className="row d-flex flex-row align-items-center justify-content-between p-2 pr-3" id="navbar">
      {screen === 'CHAT_LIST' ? (
        <img
          src={image || 'https://via.placeholder.com/400x400'}
          onClick={() => redirect('PROFILE')}
          alt="Profile Photo"
          className="img-fluid rounded-circle mr-2"
          style={{ width: '50px' }}
        />
      ) : null}

      {screen === 'MESSAGES' && !sm ? (
        <img
          src={image || 'https://via.placeholder.com/400x400'}
          onClick={() => redirect('PROFILE')}
          alt="Profile Photo"
          className="img-fluid rounded-circle mr-2"
          style={{ width: '50px' }}
        />
      ) : null}
      {screen !== 'CHAT_LIST' && screen !== 'MESSAGES' ? <i className="fas fa-arrow-left" onClick={() => redirect('CHAT_LIST')}></i> : null}

      {screen !== 'GROUP' ? <i className="far fa-comments" onClick={() => redirect('GROUP')}></i> : null}

      {screen === 'GROUP' ? <div className="justify-self-start">Create Group</div> : null}
    </div>
  );
};
export default Nav;
