import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams()
  return (
    <div className='flex justify-center items-center px-4 py-2 mt-3 mb-4 bg-blue-400 text-5xl font-bold underline text-red-500'>
      User : {userId}
    </div>
  )
}

export default User
