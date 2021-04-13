import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

const Index = props => {
    //query form state
    const [query, setQuery] = useState({
        remote: false,
        salaryPosted: false,
        experience: 0
    })

    //handle query when form inputs are changed
    const handleQuery = (e) =>{
        if(e.target.type === 'checkbox'){
            setQuery({
                ...query,
                [e.target.name]: e.target.checked
            })
        }else{
            setQuery({
                ...query,
                [e.target.name]: e.target.value
            })
        }
    }

    //Return the experience level that's be selected to render to UI
    const expDisplay = () =>{
        if(query.experience === 0){
            return "Any"
        }else if(query.experience > 9){
            return '10+'
        }else if(query.experience > 0 || query.experience < 10){
            return query.experience
        }
    }

    //handle checkbox filters
    // const handleFilter = (e) =>{
    //     console.log(e.target.checked)
    // }
    return (
      <section className="h-full flex flex-col">
        <section className="h-1/4 bg-gradient-to-b from-purple-400 to-purple-600 flex flex-col justify-center items-center">
          <div className="container flex flex-col justify-between items-center">
            <form className="justify-self-center w-3/4 my-8 flex flex-col">
              <div className="flex justify-between">
                <input
                  className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 m-2"
                  name="keywords"
                  type="text"
                  aria-label="Keywords"
                  placeholder="Keywords"
                  onChange={handleQuery}
                  value={query.keywords}
                />
                <input
                  className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-2 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 m-2"
                  name="city"
                  type="select"
                  aria-label="City"
                  placeholder="City"
                  onChange={handleQuery}
                  value={query.city}
                />
                <input
                  className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-2 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 m-2"
                  name="company"
                  type="select"
                  aria-label="Company"
                  placeholder="Company"
                  onChange={handleQuery}
                  value={query.company}
                />
              </div>
              <div className="flex justify-between mx-2">
                <div class="flex my-2 text-white text-sm font-semibold">
                  <label class="mr-2 flex items-center">
                    <input
                      name="remote"
                      onChange={handleQuery}
                      value={query.remote}
                      type="checkbox"
                      class="form-checkbox"
                    />
                    <span class="ml-2">Remote Only</span>
                  </label>
                  <label class="ml-2 flex items-center">
                    <input
                      type="checkbox"
                      name="salaryPosted"
                      onChange={handleQuery}
                      value={query.salaryPosted}
                      class="form-checkbox"
                    />
                    <span class="ml-2">Salary Posted</span>
                  </label>
                  <label class="ml-2 flex flex-col items-center">
                    <span class="ml-2">
                      Years of Experience: {expDisplay()}{" "}
                    </span>
                    <input
                      type="range"
                      id="experience"
                      name="experience"
                      onChange={handleQuery}
                      value={query.experience}
                      min={0}
                      max={11}
                      defaultValue={0}
                    />
                  </label>
                </div>
                <button className="transition duration-75 ease-in-out focus:bg-green-600 hover:bg-green-600 bg-green-500 py-2 px-3 rounded-md text-white font-bold shadow-md m-2">
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="flex-1 flex justify-center">
          <div className="m-6 container w-3/4 flex flex-col">
            <div className="hover:shadow-none m-4 transition duration-50 cursor-pointer ease-in-out hover:bg-gray-100 bg-white flex rounded-lg flex-1 min-w-24 max-h-36 shadow-xl">
              <div className="h-full w-1/5 flex justify-center items-center p-3">
                <img
                  className="object-fill rounded-lg"
                  src="https://placebear.com/100/100"
                  alt=""
                />
              </div>
              <div className="flex flex-col p-3">
                <p className="text-gray-700 font-semibold">Master of Coin</p>
                <p className="text-gray-400 text-xs font-semibold">
                  House Baratheon
                </p>
                <div className="flex flex-wrap">
                  <small className=" m-1 py-1 px-2 rounded-full text-xs bg-pink-200 text-pink-800">
                    Javascript
                  </small>
                  <small className=" m-1 py-1 px-2 rounded-full text-xs bg-pink-200 text-pink-800">
                    Leadership
                  </small>
                  <small className=" m-1 py-1 px-2 rounded-full text-xs bg-pink-200 text-pink-800">
                    SQL
                  </small>
                  <small className=" m-1 py-1 px-2 rounded-full text-xs bg-pink-200 text-pink-800">
                    Data Analytics
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
}

Index.propTypes = {

}

export default Index
