import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckBox"
import { useState } from "react"
const signup = () => {
  
  const [inputs , setInputs] = useState({
    fullname : '',
    username : '',
    password : '',
    confirmPassword : '',
    gender: ''
  });

  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs , gender});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
  }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto"> 
          <div className="w-full p-6 rounded-lg shadow-md bg-pink-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-black">
              Signup  &nbsp;
            <span className="text-blue-700 ">
               Chat App
            </span>
            </h1>
            <form onSubmit={handleSubmit}>
                
              <div>
                  <label className="label p-2"> 
                      <span className="text-base label-text">Fullname</span>
                  </label>
                  <input type="text" placeholder="Enter Your full name" className="w-full input input-bordered h-10"
                    value={inputs.fullname}
                    onChange={(e) => setInputs({...inputs , fullname : e.target.value})}    
                  />
              </div>
              <div>
                  <label className="label p-2"> 
                      <span className="text-base label-text">Username</span>
                  </label>
                  <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"
                  value={inputs.username}
                  onChange={(e) => setInputs({...inputs , username : e.target.value})}
                  />
              </div>
              <div>
                  <label className="label p-2"> 
                      <span className="text-base label-text">Password</span>
                  </label>
                  <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                  value={inputs.password}
                  onChange={(e) => setInputs({...inputs , password: e.target.value})}
                  />
              </div>

              <GenderCheckbox oncheckBoxChange = {handleCheckBoxChange} selectGender={inputs.gender}/>
              <div>
                  <label className="label p-2"> 
                      <span className="text-base label-text">Confirm Password</span>
                  </label>
                  <input type="password" placeholder="Enter Password again" className="w-full input input-bordered h-10"
                  value={inputs.confirmPassword}
                  onChange={(e) => setInputs({...inputs , confirmPassword: e.target.value})}
                   />
              </div>
              <div>
                  <button className="btn btn-block btn-sm mt-2"> Signup </button>
              </div>

              <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                Already have an account ?    
              </Link> 

            </form>
          </div>
        </div>
  )
}

export default signup
