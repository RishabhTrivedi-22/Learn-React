import React from 'react'
import {useDispatch} from 'react-redux'
import authserv from '../../appwrite/auth_service'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authserv.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn
