import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  height: calc(100vh - 50px);
  background-color: #191919;
  flex-direction: column;
`;

export const MessagesWrapper = styled.div`
  height: calc(100% - 70px);
  overflow: auto;
`;

export const ControlsWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #3a3a3a;
`;

export const ControlsForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MessageInput = styled.textarea`
  resize: none;
  overflow: auto;
  border: 0px;
  outline: 0px;
  background-color: transparent;
  margin-left: 27px;
  width: 100%;
  color: #d1d1d1;
  font-size: 22px;
`;
export const Button = styled.button`
  margin-right: 17px;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
`;
