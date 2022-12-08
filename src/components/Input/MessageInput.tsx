import { FC, memo } from 'react'
import { useInput } from '../../hooks/useInput'
import { IUser } from '../../types'
import styles from './MessageInput.module.css'

interface IProps {
  user: IUser
  sendMessage: (text: string, user: IUser) => void
}

const Input: FC<IProps> = ({ user, sendMessage }) => {
  const { text, inputRef, onText, handleEnter, sendMessageHandler } = useInput(
    user,
    sendMessage
  )

  return (
    <div className={styles.input_container}>
      <input
        type="text"
        value={text}
        onChange={onText}
        onKeyDown={handleEnter}
        ref={inputRef}
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
