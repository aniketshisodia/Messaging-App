import { Link } from "react-router-dom"
import GenderCheckbox from "./gendeerCheckbox"
const signup = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto"> 
          <div className="w-full p-6 rounded-lg shadow-md bg-pink-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-black">
              Signup  &nbsp;
            <span className="text-blue-700 ">
               Chat App
            </span>
            </h1>
            <form>
                
              <div>
                  <label className="label p-2"> 
                      <span className="text-base label-text">Fullname</span>
                  </label>
                  <input type="text" placeholder="Enter Your full name" className="w-full input input-bordered h-10"/>
              </div>
              <div>
                  <label className="label p-2"> 
                      <span className="text-base label-text">Username</span>
                  </label>
                  <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"/>
              </div>
              <div>
                  <label className="label p-2"> 
                      <span className="text-base label-text">Password</span>
                  </label>
                  <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
              </div>

              <GenderCheckbox></GenderCheckbox>
              <div>
                  <label className="label p-2"> 
                      <span className="text-base label-text">Confirm Password</span>
                  </label>
                  <input type="password" placeholder="Enter Password again" className="w-full input input-bordered h-10"/>
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
