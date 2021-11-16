import { Button, ChatWrapper, ControlsForm, ControlsWrapper, MessageInput, MessagesWrapper } from './style';
import React, { useEffect, useState } from 'react';
import { SendImageVector } from '../../icon/SendImageVector';
import { MessagesList } from './MessagesList';

export const Chat = ({ name }) => {
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('messages')) ?? []);
  const [ws, setWs] = useState(undefined);
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    const websocket = new WebSocket('wss://ws.qexsystems.ru ', ['soap', 'wamp']);
    websocket.onopen = () => {
      setWs(websocket);
    };
    websocket.onmessage = (event) => {
      setMessages((prevState) => [...prevState, JSON.parse(event.data)]);
    };
    websocket.onerror = (evt) => {
      console.error(evt);
    };
  }, []);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (ws.readyState === 1 && message.length) {
      const sentMessage = {
        name,
        text: message,
        date: new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' }),
      };
      ws.send(JSON.stringify(sentMessage));
      setMessages((prevState) => [...prevState, sentMessage]);
      setMessage('');
    }
  };

  const handleChange = (event) => setMessage(event.target.value);

  const handleSubmit = (event) => {
    if (event.keyCode === 13 && event.shiftKey) {
      event.preventDefault();
      return addNewLineToTextArea();
    }
    if (event.keyCode === 13) {
      handleSendMessage(event);
    }
  };

  const addNewLineToTextArea = () => {
    const msg_text = message + '\r\n';
    setMessage(msg_text);
  };

  return (
    <ChatWrapper>
      <MessagesWrapper>
        <MessagesList messages={messages} name={name} />
      </MessagesWrapper>
      <ControlsWrapper>
        <ControlsForm>
          <MessageInput
            value={message}
            placeholder="Enter text message..."
            onKeyDown={handleSubmit}
            onChange={handleChange}
          />
          <Button onClick={handleSendMessage}>
            <SendImageVector typing={message?.length} />
          </Button>
        </ControlsForm>
      </ControlsWrapper>
    </ChatWrapper>
  );
};
