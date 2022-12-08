import React, { FC, memo } from "react";
import { IMessage, IUser } from "../types";
import { formatDate } from "../utils/helpers";

interface IProps {
  message: IMessage;
  user: IUser;
}

const Message: FC<IProps> = ({ message, user }) => {

  const messageStatus = message.user.id === user.id ? "received" : "sent";
  const messageBubbleStatus =
    message.user.id === user.id ? "sent-bubble" : "received-bubble";
  const messageAuthor =
    message.user.id === user.id ? "Вы" : message.user.username;

  return (
    <div className={messageStatus}>
      <h5 className="head">
        {messageAuthor} | <span>{formatDate(message.date)}</span>
      </h5>
      <p className={messageBubbleStatus}>{message.text}</p>
    </div>
  );
};

export default memo(Message);
