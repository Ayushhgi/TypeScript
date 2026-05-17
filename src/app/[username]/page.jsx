import React from 'react'

const page = async ({ params }) => {
  const { username } = await params
  return (
    <div>
      <h1>Username -{username}</h1>
      {console.log(username)}
    </div>
  )
}

export default page
