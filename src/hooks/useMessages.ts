import { useEffect, useRef, useState } from 'react'
import { getMessagesFromSessionStorage } from '../utils/storage'
import { generateId } from '../utils/helpers'
import { IUser } from '../types'
import { STORAGE_MESSAGES } from '../utils/constants'

export const useMessages = () => {
  const [messages, setMessages] = useState(getMessagesFromSessionStorage)
  const bottomRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })

    const loadMessages = () => {
      setMessages(getMessagesFromSessionStorage)
    }

    window.addEventListener('storage', loadMessages)
    return () => window.removeEventListener('storage', loadMessages)
  }, [messages])

  const sendMessage = (text: string, user: IUser) => {
    const updatedMessages = [
      ...messages,
      { id: generateId(), text, user, date: new Date() },
    ]

    setMessages(updatedMessages)
    window.localStorage.setItem(
      STORAGE_MESSAGES,
      JSON.stringify(updatedMessages)
    )
  }

  return {
    messages,
    bottomRef,
    sendMessage,
  }
}
