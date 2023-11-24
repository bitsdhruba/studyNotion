import bgImage from '../assets/pic1.avif';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


function Templete({title, desc1, desc2, image,formType, setLoggedin}) {
    return (
      <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
        <div className="w-11/12 max-w-[450px] mx-0 text-black">
          <div>
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
              {title}
            </h1>
            <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
              <p className="text-richblack-100">{desc1}</p>
              <p className="text-blue-200 italic">{desc2}</p>
            </p>
          </div>

          <div>
            {formType === "login" ? (
              <LoginForm setLoggedin={setLoggedin} />
            ) : (
              <SignupForm setLoggedin={setLoggedin} />
            )}
          </div>

          <div className="flex w-full items-center my-4 gap-x-2">
            <div className="h-[1px] w-full bg-black"></div>
            <p className="text-richblack-700 font-medium leading-[1.375rem]">
              or
            </p>
            <div className="h-[1px] w-full bg-black"></div>
          </div>

          <button className="bg-slate-400 w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-black-700 border px-[12px] py-[8px] gap-x-2 mt-6">
            Continue with Google
          </button>
        </div>

        <div className="relative w-11/12 max-w-[450px]">
          <img
            src={bgImage}
            alt="background"
            width={450}
            height={300}
            loading="lazy"
          ></img>
          <img
            src={image}
            alt="user avater"
            width={300}
            height={300}
            loading="lazy"
            className="absolute -top-0 left-20 "
          ></img>
        </div>
      </div>
    );
}

export default Templete;