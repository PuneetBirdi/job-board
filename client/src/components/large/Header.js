import React from 'react'

//CUSTOM UI COMPONENTS
import JobCard from '../small/JobCard';
import AuthBox from '../small/AuthBox';

const Header = () => {
    return (
      <section className="h-screen bg-gradient-to-b from-purple-400 to-purple-600 flex flex-col justify-center items-center">
        <div className="container h-2/3 flex flex-1 flex-col justify-between items-center">
          <div className="container self-start mt-16 flex justify-between">
            <div className="mx-4 flex-2">
              <h1 className="text-5xl font-bold text-white">
                Kickstart your career.
              </h1>
              <p className="text-2xl font-semibold text-gray-300">
                Powered by a blockchain based AI platform using Machine Learning
                to hit all tech world buzzwords!
              </p>
            </div>
            <div className="flex-1 mx-4 flex justify-end">
                <AuthBox/>
            </div>
          </div>
          <form className="justify-self-center w-2/3 p-4 mt-12 mb-10 flex">
            <input
              className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-l-md p-3"
              type="text"
              aria-label="Search jobs"
              placeholder="Keyword search"
            />
            <input
              className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-2 text-sm text-black placeholder-gray-500 border border-gray-200 p-3"
              type="text"
              aria-label="Search jobs"
              placeholder="City"
            />
            <button className="transition duration-75 ease-in-out focus:bg-green-600 hover:bg-green-600 bg-green-500 px-3 rounded-r-md text-white font-bold">
              Search
            </button>
          </form>
          <section className="flex flex-col flex-1">
            <h2 className="text-gray-100 font-bold text-xl my-2 text-center">
              Featured Jobs
            </h2>
            <div className="flex justify-center flex-wrap">
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </section>
        </div>
      </section>
    );
}

export default Header
