import React, {useState} from 'react'
import FormButton from '../small/FormButton';

const Setup = props => {
    const [type, setType] = useState(null)
    //Stage 1 is defining the type of account, stage two is adding the appropriate info for profile or company
    const [stage, setStage] = useState(1)

    //Return the appropriate form to define what type of account is being created
    const typeSetup = () =>{
        return (
          <section className="h-screen flex flex-col justify-center items-center">
            <div className="container w-1/3 flex flex-col justify-between items-center">
              <div className="w-full self-start ">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-600">
                  I am a...
                </h1>
              </div>
              <form className="rounded-xl justify-self-center w-full p-8 mt-10 mb-24 flex flex-col justify-between">
                <div className="w-full flex justify-between py-4">
                  <button
                    className={
                      type === "company"
                        ? `bg-blue-500 text-white p-8 rounded shadow`
                        : `bg-gray-100 hover:bg-blue-500 text-gray-700 hover:text-white rounded shadow-lg p-8`
                    }
                    name="type"
                    value="company"
                    type="button"
                    onClick={(e) => handleType("company")}
                  >
                    <h2 className="text-center font-bold text-2xl my-2 pointer-events-none">
                      Company
                    </h2>
                    <p>that is looking to hire.</p>
                    <div className="p-2 m-2 pointer-events-none">
                      <ul className="list-disc text-left pointer-events-none"></ul>
                    </div>
                  </button>
                  <button
                    className={
                      type === "candidate"
                        ? `bg-red-500 text-white p-8 rounded shadow`
                        : `bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white p-8 rounded shadow-lg`
                    }
                    name="type"
                    value="candidate"
                    type="button"
                    onClick={(e) => handleType("candidate")}
                  >
                    <h2 className="text-center font-bold text-2xl my-2 pointer-events-none">
                      Candidate
                    </h2>
                    <p>that is looking for a job!</p>
                    <div className="p-2 m-2 pointer-events-none">
                      <ul className="list-disc text-left pointer-events-none"></ul>
                    </div>
                  </button>
                </div>
                <div className="py-4 w-full flex justify-end">
                  <button type="button" className="text-sm transition duration-75 ease-in-out focus:bg-green-600 hover:bg-green-600 bg-green-500 py-2 px-2 rounded-md text-white font-bold shadow-md"
                  onClick={(e) => setStage(stage + 1)}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </section>
        );
    }
    //Return the approriate form for setting up a new company
    const companySetup = () =>{
        return (
          <section className="h-screen flex flex-col justify-center items-center">
            <div className="container w-full flex flex-col justify-between items-center">
              <div className="w-full self-start ">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-600">
                  Company Information
                </h1>
              </div>
              <form
                className="rounded-xl shadow-lg bg-gradient-to-b from-purple-400 to-purple-600 justify-self-center w-2/3 p-8 mt-10 mb-24 flex flex-col"
                action="none"
              >
                <div className="flex justify-between">
                  <input
                    className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4 mr-4"
                    name="companyName"
                    type="text"
                    aria-label="Company Name"
                    placeholder="Company Name"
                  />
                  <div className="flex">
                    <input
                      className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4 ml-4"
                      name="companyPhoto"
                      type="text"
                      aria-label="Company Photo"
                      placeholder="Link to company photo"
                    />
                    <div className="text-white font-semibold text-sm flex flex-col justify-center mx-2">
                      <p>Or</p>
                    </div>
                    <input
                      className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-white placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4"
                      name="companyPhoto"
                      type="file"
                      aria-label="Company Photo upload"
                      placeholder="Link to company photo"
                    />
                  </div>
                </div>
                <input
                  className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4"
                  name="tags"
                  type="text"
                  aria-label="Company description tags"
                  placeholder="Enter tags to describe your company comma seperated."
                />
                <textarea
                  className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4 min-h-12"
                  name="tags"
                  type="text"
                  aria-label="Company description tags"
                  placeholder="Enter some more information about your company! What do you do and what makes you special?"
                />
                <div className="w-full flex justify-between">
                  <button
                    type="button"
                    className="text-sm transition duration-75 ease-in-out focus:bg-red-600 hover:bg-red-600 bg-red-500 py-2 px-2 rounded-md text-white font-bold shadow-md"
                    onClick={(e) => setStage(stage - 1)}
                  >
                    Back
                  </button>
                  <FormButton text={"Submit"} color={"green"} />
                </div>
              </form>
            </div>
          </section>
        );
    }
    //Return the appropriate form for setting up a new candidate profile
    const profileSetup = () =>{
        return (
          <section className="h-screen flex flex-col justify-center items-center">
            <div className="container w-full flex flex-col justify-between items-center">
              <div className="w-full self-start ">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-600">
                  Candidate Information
                </h1>
              </div>
              <form
                className="rounded-xl shadow-lg bg-gradient-to-b from-purple-400 to-purple-600 justify-self-center w-2/3 p-8 mt-10 mb-24 flex flex-col"
                action="none"
              >
                <div className="flex justify-between">
                  <div className="flex justify-between flex-1">
                    <input
                      className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4"
                      name="firstName"
                      type="text"
                      aria-label="First Name"
                      placeholder="First Name"
                    />
                    <input
                      className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4 ml-4"
                      name="lastName"
                      type="text"
                      aria-label="Last Name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="flex">
                    <input
                      className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4 ml-4"
                      name="photo"
                      type="text"
                      aria-label="Candidate Photo"
                      placeholder="Link to Photo"
                    />
                    <div className="text-white font-semibold text-sm flex flex-col justify-center mx-2">
                      <p>Or</p>
                    </div>
                    <input
                      className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-white placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4"
                      name="photo"
                      type="file"
                      aria-label="Upload candidate photo"
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <input
                    className="flex-2 focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4"
                    name="tags"
                    type="text"
                    aria-label="Candidate skills tags"
                    placeholder="Enter your skills, comma seperated."
                  />
                  <input
                    className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-nonetext-sm text-white placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4 ml-4"
                    name="photo"
                    type="file"
                    aria-label="Upload candidate photo"
                  />
                </div>
                <textarea
                  className="focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none flex-1 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-3 my-4 min-h-12"
                  name="tags"
                  type="text"
                  aria-label="Company description tags"
                  placeholder="Enter some more information about you! Who are you and what makes you special?"
                />
                <div className="w-full flex justify-between">
                  <button
                    type="button"
                    className="text-sm transition duration-75 ease-in-out focus:bg-red-600 hover:bg-red-600 bg-red-500 py-2 px-2 rounded-md text-white font-bold shadow-md"
                    onClick={(e) => setStage(stage - 1)}
                  >
                    Back
                  </button>
                  <FormButton text={"Submit"} color={"green"} />
                </div>
              </form>
            </div>
          </section>
        );
    }

    //Handle changing the type state
    const handleType = (selectedType) =>{
        setType(selectedType)
    }
    //Handle going to the next stage of the setup
    const nextStage = (e) =>{
        e.preventDefault()
        console.log('test')
        setStage(stage + 1)
    }

    const returnForm = () =>{
        if(stage === 1){
            return typeSetup()
        }if(stage === 2 && type === 'company'){
            return companySetup()
        }if(stage === 2 && type === 'candidate'){
            return profileSetup()
        }
    }

    return (
        returnForm()
    );
}

export default Setup
