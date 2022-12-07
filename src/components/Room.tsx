import { FC, memo } from 'react'
import { IMessage, IUser } from '../types'
import Message from './Message'

interface IProps {
  messages: IMessage[]
  user: IUser
  bottomRef: React.LegacyRef<HTMLDivElement> | undefined
}

const Room: FC<IProps> = ({ messages, user, bottomRef }) => {
  return (
    <div>
      {messages.length ? (
        <div className="container message-container">
          {messages.map((message) => (
            <Message key={message.id} message={message} user={user} />
          ))}
          <div ref={bottomRef} />
        </div>
      ) : (
        <h4>Нет сообщений</h4>
      )}
    </div>
  )
}

export default memo(Room)
