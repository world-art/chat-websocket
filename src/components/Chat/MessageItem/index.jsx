import React from 'react';
import { AnotherMessage, MessageWrapper, TextWrapper, TimeWrapper, YourMessage } from './style';

export const MessageItem = ({ message, name }) => {
  return (
    <MessageWrapper>
      {message.name === name ? (
        <YourMessage>
          <TextWrapper myMessage={true}>{message.text}</TextWrapper>
          <TimeWrapper myMessage={true}>{message.date}</TimeWrapper>
        </YourMessage>
      ) : (
        <AnotherMessage>
          <TextWrapper>
            <p>{message.name}</p>
            {message.text}
          </TextWrapper>
          <TimeWrapper myMessage={false}>{message.date}</TimeWrapper>
        </AnotherMessage>
      )}
    </MessageWrapper>
  );
};
