import { useState } from "react";
import toast from "react-hot-toast";
import { PiEye, PiEyeClosedDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";


function LoginForm({setLoggedin}) {
    
    const [formData, setFormData] = useState({email:"", password:""});

    function onChangeHandler (event){
        setFormData((prevData)=>{
            return {
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    };

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function onSubmitHandler(event){
        event.preventDefault();
        setLoggedin(true);
        navigate("/dashboard");
        toast.success("Logged In")
    }
    
    return (
      <div>
        <form onSubmit={onSubmitHandler}>
          <label>
            <p>
              Enter your Email<sup>*</sup>
            </p>
            <input
              required
              type="email"
              placeholder="example@gmail.com"
              value={FormData.email}
              name="email"
              onChange={onChangeHandler}
            />
          </label>
          <label>
            <p>
              Enter your Password<sup>*</sup>
            </p>
            <input
              required
              type= {showPassword ? ("text") : ("password") }
              name="password"
              value={formData.password}
              placeholder="Enter your Password"
              onChange={onChangeHandler}
            />

            <span onClick={()=> setShowPassword((prev)=> !prev)}>
              {showPassword ? (<PiEye/>) : (<PiEyeClosedDuotone/>) }
            </span>
          </label>
          <Link to="#">
            <p>Forgot Password</p>
          </Link>

          <button>Log in</button>
        </form>
      </div>
    );
}

export default LoginForm;