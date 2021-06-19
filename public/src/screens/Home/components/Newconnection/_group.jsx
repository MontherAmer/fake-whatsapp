import React from 'react';

const Group = () => {
  return (
    <div className="px-3 py-3 w-100" id="group">
      <div className="mb-1">
        <label>Create group:</label>
      </div>
      <div className="d-flex">
        <input
          type="text"
          name="groupName"
          placeholder="Enter group name"
          autoComplete="off"
          onChange={handleChange}
          className="w-100 border-0 py-2"
        />
      </div>
      <div>
        <input
          type="text"
          autoComplete="off"
          name="search"
          value={state.search}
          placeholder="Start typing to select friend.."
          onChange={handleSearch}
          className="w-100 border-0 py-2"
        />
        {state.show ? (
          <div className="group-menu">
            {state.result.map((item, i) => (
              <div className="chat-list-item d-flex flex-row w-100 p-2 border-bottom unread" id="contact" key={i}>
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
      {state.show ? null : (
        <div className="d-flex justify-content-end my-2">
          <i className="far fa-caret-square-right"></i>
        </div>
      )}
    </div>
  );
};
export default Group;
