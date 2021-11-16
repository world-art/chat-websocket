import React, { useMemo } from 'react';
import { ContainerMessagesList } from './style';
import { MessageItem } from '../MessageItem';

export const MessagesList = ({ messages, name }) => {
  const listMessages = useMemo(
    () => messages.map((message, index) => message.name && <MessageItem message={message} name={name} key={index} />),
    [messages, name],
  );
  return <ContainerMessagesList>{listMessages}</ContainerMessagesList>;
};
