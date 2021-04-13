import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Index = props => {
    return (
      <section className="h-full flex flex-col">
        <section className="h-1/4 bg-gradient-to-b from-purple-400 to-purple-600 flex flex-col justify-center items-center">
          <div className="container flex flex-col justify-between items-center">
            <form className="justify-self-center w-3/4 my-8 flex flex-col">
              <div className="flex justify-between">
                <input
                  className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 m-2"
                  name="Keywords"
                  type="text"
                  aria-label="Keywords"
                  placeholder="Keywords"
                />
                <input
                  className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-2 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 m-2"
                  name="city"
                  type="select"
                  aria-label="City"
                  placeholder="City"
                />
                <input
                  className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-2 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 m-2"
                  name="company"
                  type="select"
                  aria-label="Company"
                  placeholder="Company"
                />
                <div class="flex text-white text-sm font-bold">
                    <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox"/>
                        <span class="ml-2">Remote Only</span>
                    </label>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="transition duration-75 ease-in-out focus:bg-green-600 hover:bg-green-600 bg-green-500 py-2 px-3 rounded-md text-white font-bold shadow-md m-2">
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="bg-gray-200 flex-1 flex justify-center">
          <div className="container w-3/4 bg-purple-200">
            <p>test</p>
          </div>
        </section>
      </section>
    );
}

Index.propTypes = {

}

export default Index
