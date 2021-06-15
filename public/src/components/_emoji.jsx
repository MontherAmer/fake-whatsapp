import React from 'react';
import Picker from 'emoji-picker-react';

const Emoji = ({ show, handleChoose }) => {
  const onEmojiClick = (event, emojiObject) => handleChoose(emojiObject.emoji);

  return (
    <div id="emoji" style={{ display: show ? 'block' : 'none' }}>
      <Picker onEmojiClick={onEmojiClick} preload={true} disableSearchBar={true} />
    </div>
  );
};

export default Emoji;
