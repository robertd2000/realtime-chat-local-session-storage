import { FC, memo } from 'react'

interface IProps {
  username: string
  setUsername: (value: string) => void
  joinToChat: () => void
}

const Modal: FC<IProps> = ({ username, setUsername, joinToChat }) => {
  return (
    <div className="modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Войдите в чат</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control"
              placeholder="Введите имя"
              type="text"
              value={username!}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={joinToChat}
              className="btn btn-primary"
            >
              Присоединиться
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Modal)
