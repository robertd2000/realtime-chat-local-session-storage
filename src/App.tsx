import Room from './components/Room'
import MessageInput from './components/MessageInput'
import Modal from './components/Modal'

import { useMessages } from './hooks/useMessages'
import { useUser } from './hooks/useUser'

import './App.css'
import Header from './components/Header'

export default function App() {
  const { messages, sendMessage, bottomRef } = useMessages()
  const { user, showModal, setUsername, joinToChat } = useUser()

  return (
    <div className="main-container">
      {showModal && (
        <Modal
          username={user.username!}
          setUsername={setUsername}
          joinToChat={joinToChat}
        />
      )}
      {!showModal && (
        <div>
          <Header username={user.username} />
          <Room messages={messages} user={user} bottomRef={bottomRef} />
          <MessageInput user={user!} sendMessage={sendMessage} />
        </div>
      )}
    </div>
  )
}
