import React from 'react'

const FormButton = ({text, color, loading}) => {
    return loading ? (
      <button className="text-sm transition duration-75 ease-in-out focus:bg-gray-600 hover:bg-gray-600 bg-gray-500 py-2 px-2 rounded-md text-white font-bold shadow-md">
        Loading...
      </button>
    ) : (
      <button className="text-sm transition duration-75 ease-in-out focus:bg-blue-600 hover:bg-blue-600 bg-blue-500 py-2 px-2 rounded-md text-white font-bold shadow-md">
        {text}
      </button>
    );
}

export default FormButton
