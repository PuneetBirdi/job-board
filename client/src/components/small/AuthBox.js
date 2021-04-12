import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import { login, loadUser } from '../redux/actions/authActions'
import PropTypes from 'prop-types'
//Small UI components
import FormButton from './FormButton';

const AuthBox = ({
  auth: {isAuthenticated, loading},
  login,
  loadUser
}) => {
  const [type, setType] = useState("login");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  //Switch from register to login and vice versa
  const changeType = () => {
    if (type === "login") {
      setType("register");
    } else if (type === "register") {
      setType("login");
    }
  };

  //handle input for login credentials
  const handleCredentials = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };


  //Handle login
  const loginUser = (e) => {
    e.preventDefault();
    login(credentials.email, credentials.password)
  };

  //handle registration
  const registerUser = (e) =>{
    e.preventDefault();
    console.log(credentials)
  }
  //return the appropriate form depending on what is selected, login, or register
  const displayForm = () => {
    if (type === "login") {
      return (
        <form className="rounded-xl shadow-lg bg-gray-100 justify-self-center w-2/3 p-4 flex flex-col">
          <input
            className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 my-2"
            type="email"
            name="email"
            aria-label="Email"
            placeholder="Email"
            onChange={handleCredentials}
            required
          />
          <input
            className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 my-2"
            type="password"
            name="password"
            aria-label="password"
            placeholder="Password"
            onChange={handleCredentials}
            required
          />
          {/* <small className="text-red-500 text-xs mb-2 text-center">
            Invalid credentials
          </small> */}
          <FormButton text={'Login'} onClick={loginUser} loading={loading}/>
          <div className="p-2 text-xs text-gray-400 font-semibold flex justify-between">
            <p>Forgot your password?</p>
            <button
              className="text-xs text-gray-400 font-semibold"
              onClick={changeType}
            >
              <p>Register</p>
            </button>
          </div>
        </form>
      );
    } else if (type === "register") {
      return (
        <form className="rounded-xl shadow-lg bg-gray-100 justify-self-center w-2/3 p-4 flex flex-col transition duration-200">
          <input
            className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 my-2"
            name="email"
            type="text"
            aria-label="Email"
            placeholder="Email"
            onChange={handleCredentials}
          />
          <input
            className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 my-2"
            name="password"
            type="password"
            aria-label="password"
            placeholder="Password"
            onChange={handleCredentials}
          />
          <input
            className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 my-2"
            name="password2"
            type="password"
            aria-label="password confirmation"
            placeholder="Password Confirmation"
            onChange={handleCredentials}
          />
          <button
            className="text-sm transition duration-75 ease-in-out focus:bg-blue-600 hover:bg-blue-600 bg-blue-500 py-2 px-2 rounded-md text-white font-bold shadow-md"
            onClick={registerUser}
          >
            Register
          </button>
          <div className="p-3 text-xs text-gray-400 font-semibold flex justify-center">
            <button
              className="text-xs text-gray-400 font-semibold"
              onClick={changeType}
            >
              <p>Already have an account?</p>
            </button>
          </div>
        </form>
      );
    }
  };

  //Return final form
  return displayForm();
}

AuthBox.propTypes = {

}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login, loadUser })(AuthBox);
