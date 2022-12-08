import { useEffect, useRef, useState } from 'react'
import { IUser } from '../types'

export const useInput = (
  user: IUser,
  sendMessage: (text: string, user: IUser) => void
) => {
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const onText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
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

  return {
    text,
    inputRef,
    onText,
    handleEnter,
    sendMessageHandler,
  }
}
