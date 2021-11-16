import styled, { css } from 'styled-components';

export const MessageWrapper = styled.div`
  margin-top: 10px;
`;
export const AnotherMessage = styled.div`
  width: 470px;
  float: left;
  background: #464646;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.07);
  border-radius: 9px;
  padding: 10px;
  display: flex;
`;
export const YourMessage = styled.div`
  width: 470px;
  float: right;
  background: rgba(20, 255, 114, 0.7);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.07);
  border-radius: 9px;
  display: flex;
  padding: 10px;
`;
export const TextWrapper = styled.div`
  ${(props) =>
    props.myMessage &&
    css`
      flex-basis: 88%;
      word-break: break-all;
      color: #ffffff;
    `}
  ${(props) =>
    !props.myMessage &&
    css`
      & > p {
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #ececec;
        margin-bottom: 0px;
      }
      flex-basis: 88%;
      word-break: break-all;
      color: #ffffff;
    `}
`;
export const TimeWrapper = styled.div`
  color: ${(props) => (props.myMessage ? '#dfdfdf' : '#14FF72')};
  font-size: 12px;
  display: flex;
  align-items: flex-end;
`;
