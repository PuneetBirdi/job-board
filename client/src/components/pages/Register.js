import React from 'react'
import PropTypes from 'prop-types'

const Register = props => {
    return (
        <section className='h-screen flex flex-col justify-center items-center'>
            <div className='container w-1/3 flex flex-col justify-between items-center'>
                <div className="w-1/2 self-start ">
                    <h1 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-600'>Lets Get Started</h1>
                </div>
                <form className='rounded-xl shadow-lg bg-gradient-to-b from-purple-400 to-purple-600 justify-self-center w-2/3 p-8 mt-10 mb-24 flex flex-col'>
                    <input className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4" name='email'type="text" aria-label="Email" placeholder="Email" />
                    <input className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4" name='password' type="password" aria-label="password" placeholder="Password" />
                    <input className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4" name='password2' type="password" aria-label="password confirmation" placeholder="Password Confirmation" />
                    <button className="transition duration-75 ease-in-out focus:bg-green-600 hover:bg-green-600 bg-green-500 py-2 px-3 rounded-md text-white font-bold shadow-md">Register</button>
                    <div className="p-3 text-sm text-gray-200 font-semibold flex justify-between">
                        <p>Already have an account?</p>
                    </div>
                </form>
            </div>
        </section>
    )
}

Register.propTypes = {

}

export default Register
