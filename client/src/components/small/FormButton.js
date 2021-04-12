import React from 'react'

const FormButton = ({text, color, loading}) => {

    const style = `text-sm transition duration-75 ease-in-out focus:bg-${color}-600 hover:bg-${color}-600 bg-${color}-500 py-2 px-2 rounded-md text-white font-bold shadow-md`;
    return loading ? (
      <button className="text-sm transition duration-75 ease-in-out focus:bg-gray-600 hover:bg-gray-600 bg-gray-500 py-2 px-2 rounded-md text-white font-bold shadow-md">
        Loading...
      </button>
    ) : (
      <button type='button' className={style}>
        {text}
      </button>
    );
}

export default FormButton
