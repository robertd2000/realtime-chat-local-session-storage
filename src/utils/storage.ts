import { STORAGE_MESSAGES, STORAGE_USERS } from './constants'

export const getMessagesFromSessionStorage = () => {
  return window.localStorage.getItem(STORAGE_MESSAGES)
    ? JSON.parse(window.localStorage.getItem(STORAGE_MESSAGES) || '[]')
    : []
}

export const getUsernameFromSessionStorage = () => {
  return window.sessionStorage.getItem(STORAGE_USERS)
    ? JSON.parse(window.sessionStorage.getItem(STORAGE_USERS) || '')
    : {}
}
