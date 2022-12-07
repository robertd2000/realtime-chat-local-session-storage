import { useState } from 'react'
import { IUser } from '../types'
import { STORAGE_USERS } from '../utils/constants'
import { generateId } from '../utils/helpers'
import { getUsernameFromSessionStorage } from '../utils/storage'

export const useUser = () => {
  const [user, setUser] = useState<IUser>(getUsernameFromSessionStorage)
  const [showModal, setShowModal] = useState<boolean>(!user.username)

  const joinToChat = () => {
    window.sessionStorage.setItem(
      STORAGE_USERS,
      JSON.stringify({
        username: user.username!,
        id: generateId(),
      })
    )
    setShowModal(false)
  }

  const setUsername = (value: string) => {
    setUser({
      ...user,
      username: value,
    })
  }
  return {
    user,
    showModal,
    setUsername,
    joinToChat,
  }
}
