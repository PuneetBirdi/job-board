import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const AuthBox = props => {
  const [type, setType] = useState('login')


  //return the appropriate form depending on what is selected, login, or register
  const displayForm = () =>{
    if (type === 'login'){
      return (
        <form className="rounded-xl shadow-lg bg-gray-100 justify-self-center w-2/3 p-4 flex flex-col">
          <input
            className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-2"
            type="text"
            aria-label="Email"
            placeholder="Email"
          />
          <input
            className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-2"
            type="password"
            aria-label="password"
            placeholder="Password"
          />
          <small className="text-red-500 text-xs mb-2 text-center">
            Invalid credentials
          </small>
          <button className="transition duration-75 ease-in-out focus:bg-blue-600 hover:bg-blue-600 bg-blue-500 py-2 px-3 rounded-md text-white font-bold shadow-md">
            Login
          </button>
          <div className="p-2 text-xs text-gray-400 font-semibold flex justify-between">
            <p>Forgot your password?</p>
            <p>Register</p>
          </div>
        </form>
      );
    }else if(type === 'register'){
      return (
        <form className="rounded-xl shadow-lg bg-gray-100 justify-self-center w-2/3 p-4 flex flex-col">
          <input
            className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-2"
            type="text"
            aria-label="Email"
            placeholder="Email"
          />
          <input
            className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-2"
            type="password"
            aria-label="password"
            placeholder="Password"
          />
          <button className="transition duration-75 ease-in-out focus:bg-blue-600 hover:bg-blue-600 bg-blue-500 py-2 px-3 rounded-md text-white font-bold shadow-md">
            Register
          </button>
          <div className="p-2 text-xs text-gray-400 font-semibold flex justify-center">
            <p>Already have an account?</p>
          </div>
      </form>
      )
    }
  }
    return (
      displayForm()
    );
}

AuthBox.propTypes = {

}

export default AuthBox
