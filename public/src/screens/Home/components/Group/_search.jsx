import React from 'react';

const Search = ({ handleChange, handleClick, show, value, options, users }) => {
  console.log('USERS  ', users);
  console.log('options  ', options);
  return (
    <div className="w-100 my-2 position-relative">
      <input
        type="text"
        autoComplete="off"
        name="search"
        value={value}
        placeholder="Start typing to select friend.."
        onChange={handleChange}
        className="w-100 border-0 py-1 px-2"
      />
      {show ? (
        <div className="group-menu">
          {options?.map((item, i) => (
            <div className="chat-list-item d-flex flex-row w-100 p-2 border-bottom unread" id="contact" onClick={() => handleClick(i)}>
              <img
                src={item.image || 'https://via.placeholder.com/400x400'}
                alt="Profile Photo"
                className="img-fluid rounded-circle mr-2"
                style={{ width: '50px' }}
              />
              <div className="w-50">
                <div className="name">{item.name}</div>
                <div className="small last-message">{item.email}</div>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {users.length ? (
        <div className="mt-2">
          <small>You and {users.length} users in this group:</small>
        </div>
      ) : null}
      {users.length ? (
        <div>
          {users?.map((item, i) => (
            <div className="chat-list-item d-flex flex-row w-100 p-2 border-bottom unread" id="contact" key={i}>
              <div className="name">{item.name}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
