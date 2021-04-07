import React from 'react'
import PropTypes from 'prop-types'

const JobCard = props => {
    return (
        <div className="hover:shadow-none transition duration-50 cursor-pointer ease-in-out min-w-24 m-2 hover:bg-gray-100 bg-white flex rounded-lg w-1/4 shadow-xl">
            <div className="h-full w-1/3">
                <img className='object-fill rounded-l-lg' src="https://placebear.com/200/300" alt=""/>
            </div>
            <div className="flex flex-col p-3">
                <p className='text-gray-700 font-semibold'>Master of Coin</p>
                <p className='text-gray-400 text-xs font-semibold'>House Baratheon</p>
                <div className="flex flex-wrap">
                    <small className=" m-1 py-1 px-2 rounded-full text-xs bg-pink-200 text-pink-800">Javascript</small>
                    <small className=" m-1 py-1 px-2 rounded-full text-xs bg-pink-200 text-pink-800">Leadership</small>
                    <small className=" m-1 py-1 px-2 rounded-full text-xs bg-pink-200 text-pink-800">SQL</small>
                    <small className=" m-1 py-1 px-2 rounded-full text-xs bg-pink-200 text-pink-800">Data Analytics</small>
                </div>
            </div>
        </div>
    )
}

JobCard.propTypes = {

}

export default JobCard
