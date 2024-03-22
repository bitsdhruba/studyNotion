import { useContext, useState } from "react";
import { PiEye, PiEyeClosedDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

function SignupForm() {
  const { setLoggedin } = useContext(AppContext);

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const [accountType, setAccountType] = useState("student");

  function onChangeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPass) {
      toast.error("Confirm your Password");
      return;
    }
    setLoggedin(true);
    navigate("/");
    toast.success("Account Created Successfully");
  }

  return (
    <>
      <div className="flex border-2 border-[#1D3557]  bg-[#F1FAEE] p-2 my-4 justify-evenly rounded-full w-full">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-[#E63946] text-white "
              : " text-black border-2 border-[#1D3557]"
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-[#E63946] text-white border-2 border-white"
              : "border-2 border-[#1D3557] bg-[#F1FAEE] text-black"
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>

      <div>
        <form onSubmit={submitHandler}>
          <div className="flex gap-x-4">
            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                First Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                placeholder="john"
                name="firstName"
                value={FormData.firstName}
                onChange={onChangeHandler}
                className="border-2 border-[#1D3557] bg-[#F1FAEE] rounded-[0.75rem] w-full p-[10px]  mb-2 text-richblack-5"
              />
            </label>
            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Last Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                placeholder="Doe"
                name="text"
                value={FormData.lastName}
                onChange={onChangeHandler}
                className="border-2 border-[#1D3557] bg-[#F1FAEE] rounded-[0.75rem] w-full p-[10px] mb-2 text-richblack-5"
              />
            </label>
          </div>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Enter Your Email <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              placeholder="examlple@gmail.com"
              name="email"
              value={FormData.email}
              onChange={onChangeHandler}
              className="border-2 border-[#1D3557] bg-[#F1FAEE] rounded-[0.75rem] w-full p-[10px] mb-2 text-richblack-5"
            />
          </label>
          <div className="flex gap-4">
            <label className="w-full relative">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Enter Your Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="abc123"
                name="password"
                value={FormData.password}
                onChange={onChangeHandler}
                className="border-2 border-[#1D3557] bg-[#F1FAEE] rounded-[0.75rem] w-full p-[10px] mb-2 text-richblack-5"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] cursor-pointer z-10"
              >
                {showPassword ? (
                  <PiEye fontSize={24} fill="black" />
                ) : (
                  <PiEyeClosedDuotone fontSize={24} fill="black" />
                )}
              </span>
            </label>
            <label className="w-full relative">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Confirm your Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={confirmPassword ? "text" : "password"}
                placeholder="abc123"
                name="confirmPass"
                value={FormData.confirmPass}
                onChange={onChangeHandler}
                className="border-2 border-[#1D3557] bg-[#F1FAEE] rounded-[0.75rem] w-full p-[10px] mb-2 text-richblack-5"
              />
              <span
                onClick={() => setConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] cursor-pointer z-10"
              >
                {confirmPassword ? (
                  <PiEye fontSize={24} fill="black" />
                ) : (
                  <PiEyeClosedDuotone fontSize={24} fill="black" />
                )}
              </span>
            </label>
          </div>
          <button className="bg-[#E63946] text-white py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
