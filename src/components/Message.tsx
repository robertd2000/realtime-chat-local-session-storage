import React, { FC } from 'react'
import { IMessage, IUser } from '../types'
import { formatDate } from '../utils/helpers'

interface IProps {
  message: IMessage
  user: IUser
}

const Message: FC<IProps> = ({ message, user }) => {
  return (
    <div className={message.user.id === user.id ? 'received' : 'sent'}>
      <h5 className="head">
        {message.user.id === user.id ? 'Вы' : message.user.username} |{' '}
        <span>{formatDate(message.date)}</span>
      </h5>
      <p
        className={`${
          message.user.id === user.id ? 'sent-bubble' : 'received-bubble'
        }`}
      >
        {message.text}
      </p>
    </div>
  )
}

export default Message
