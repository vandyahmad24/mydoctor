import React from 'react';
import Other from './Other';
import IsMe from './IsMe';

const ChatItem = ({isMe, content, date, photo}) => {
  if (isMe) {
    return <IsMe content={content} date={date} />;
  }
  return <Other content={content} date={date} photo={photo} />;
};

export default ChatItem;
