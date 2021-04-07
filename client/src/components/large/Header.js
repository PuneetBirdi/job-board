import React from 'react'

//CUSTOM UI COMPONENTS
import JobCard from '../small/JobCard';
import NavBar from '../layout/Navbar';

const Header = () => {
    return (
        <section className='h-screen bg-gradient-to-b from-purple-400 to-purple-600 flex flex-col justify-center items-center'>
            <div className="container flex justify-center">
                <nav className='bg-transparent p-4 mb-6 w-full flex justify-end'>
                    <button className="transition duration-75 ease-in-out focus:bg-green-600 hover:bg-green-600 bg-green-500 py-2 px-3 rounded-md mx-2 text-white font-bold">Login</button>
                    <button className="transition duration-75 ease-in-out focus:bg-green-600 hover:bg-green-600 bg-green-500 py-2 px-3 rounded-md mx-2 text-white font-bold">Register</button>
                    <button className="transition duration-75 ease-in-out focus:bg-green-600 hover:bg-green-600 bg-green-500 py-2 px-3 rounded-md mx-2 text-white font-bold">Post a Job</button>
                </nav>
            </div>
            <div className='container h-2/3 flex flex-1 flex-col justify-between items-center'>
                <div className="w-1/2 self-start ">
                    <h1 className='text-5xl font-bold text-white'>Kickstart your career.</h1>
                    <p className="text-2xl font-semibold text-pink-400">Powered by a blockchain based AI platform using Machine Learning to hit all tech world buzzwords!</p>
                </div>
                <form className='justify-self-center w-1/3 p-4 mt-12 mb-6 flex'>
                    <input className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-l-md p-3" type="text" aria-label="Search jobs" placeholder="Look for your next job!" />
                    <button className="transition duration-75 ease-in-out focus:bg-green-600 hover:bg-green-600 bg-green-500 px-3 rounded-r-md text-white font-bold">Search</button>
                </form>
                <section className="flex flex-col flex-1">
                    <h2 className="text-white font-bold text-lg my-2 text-center">Featured Jobs</h2>
                    <div className="flex justify-center flex-wrap">
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Header
