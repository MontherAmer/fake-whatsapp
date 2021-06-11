import React from 'react';

const Name = ({ handleChange, value }) => {
    return (
        <div className="w-100 my-2">
            <input
                type="text"
                name="name"
                placeholder="Enter group name"
                autoComplete="off"
                value={value}
                onChange={handleChange}
                className="w-100 border-0 px-2 py-1"
            />
        </div>
    );
};

export default Name;
