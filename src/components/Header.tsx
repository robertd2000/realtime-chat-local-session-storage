import React, { memo } from 'react'

const Header = ({ username }: { username: string }) => {
  return (
    <div className="head-container">
      <h1>{username}</h1>
    </div>
  )
}

export default memo(Header)
