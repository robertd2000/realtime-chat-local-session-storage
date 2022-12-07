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

  const sendMessageHandler = () => {
    sendMessage(text, user)
    setText('')
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessageHandler()
    }
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={onText}
        onKeyPress={handleEnter}
        placeholder="Message"
        aria-label="Message"
        aria-describedby="send-message"
      />
      <button
        id="send-message"
        type="button"
        onClick={sendMessageHandler}
        disabled={text.length <= 0}
      >
        Отправить
      </button>
    </div>
  )
}

export default memo(Input)
