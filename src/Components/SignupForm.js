import { useState } from "react";
import { PiEye, PiEyeClosedDuotone } from "react-icons/pi";


function SignupForm() {
    
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({firstName:"",lastName:"",email :"", password:"", confirmPass:""})

    function onChangeHandler (event){
        setFormData((prevData)=>{
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
      <div>
        <div>
          <button>Student</button>
          <button>Instructor</button>
        </div>

        <div>
          <form>
            <label>
              <p>First Name</p>
              <input
                required
                type="text"
                placeholder="john"
                name="firstName"
                value={FormData.firstName}
                onChange={onChangeHandler}
              />
            </label>
            <label>
              <p>Last Name</p>
              <input
                required
                type="text"
                placeholder="Doe"
                name="text"
                value={FormData.lastName}
                onChange={onChangeHandler}
              />
            </label>
            <label>
              <p>Enter Your Email</p>
              <input
                required
                type="email"
                placeholder="examlple@gmail.com"
                name="email"
                value={FormData.email}
                onChange={onChangeHandler}
              />
            </label>
            <label>
              <p>Enter Your Password</p>
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="abc123"
                name="password"
                value={FormData.password}
                onChange={onChangeHandler}
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <PiEye /> : <PiEyeClosedDuotone />}
              </span>
            </label>
            <label>
              <p>Confirm your Password</p>
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="abc123"
                name="confirmPass"
                value={FormData.confirmPass}
                onChange={onChangeHandler}
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <PiEye /> : <PiEyeClosedDuotone />}
              </span>
            </label>
            <button>Create Account</button>
          </form>
        </div>
      </div>
    );
}

export default SignupForm;