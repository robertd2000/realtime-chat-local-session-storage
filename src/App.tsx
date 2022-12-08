import { Room, Modal, Header, MessageInput } from './components'

import { useMessages } from './hooks/useMessages'
import { useUser } from './hooks/useUser'

import './App.css'

export default function App() {
  const { messages, sendMessage, bottomRef } = useMessages()
  const { user, showModal, setUsername, joinToChat } = useUser()

  return (
    <div className="container">
      {showModal && (
        <Modal
          username={user.username!}
          setUsername={setUsername}
          joinToChat={joinToChat}
        />
      )}
      {!showModal && (
        <div className="main-container">
          <Header username={user.username} />
          <Room messages={messages} user={user} bottomRef={bottomRef} />
          <MessageInput user={user!} sendMessage={sendMessage} />
        </div>
      )}
    </div>
  )
}
