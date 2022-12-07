export interface IMessage {
  id: string | number
  text: string
  user: IUser
  date: string
}

export interface IUser {
  username: string
  id: string | number
}
