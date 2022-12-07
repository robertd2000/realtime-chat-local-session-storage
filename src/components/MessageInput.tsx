import { FC, memo, useState } from 'react'
import { IUser } from '../types'

interface IProps {
  user: IUser
  sendMessage: (text: string, user: IUser) => void
}

const Input: FC<IProps> = ({ user, sendMessage }) => {
  const [text, setText] = useState('')

  const onText = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setText(e.target.value)
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={onText}
        placeholder="Message"
        aria-label="Message"
        aria-describedby="send-message"
      />
      <button
        id="send-message"
        type="button"
        onClick={() => sendMessage(text, user)}
        disabled={text.length <= 0}
      >
        Отправить
      </button>
    </div>
  )
}

export default memo(Input)
