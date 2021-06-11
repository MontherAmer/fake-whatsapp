import React from 'react';

const Search = ({ handleChange, show, value, options }) => {
  return (
    <div className="w-100 my-2">
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
          {options?.map((item) => (
            <div className="chat-list-item d-flex flex-row w-100 p-2 border-bottom unread" id="contact">
              <img src={item.image} alt="Profile Photo" className="img-fluid rounded-circle mr-2" />
              <div className="w-50">
                <div className="name">{item.name}</div>
                <div className="small last-message">{item.email}</div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
