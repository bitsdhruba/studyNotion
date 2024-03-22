import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Templete({ title, desc1, desc2, image, formType }) {
  return (
    <div className="p-4">
      <div>
        <div>
          <h1 className="text-[#1D3557] font-semibold text-[1.875rem] leading-[2.375rem]">
            {title}
          </h1>
          <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
            <span className="text-[#457B9D]">{desc1}</span>
            <span className="text-[#457B9D] italic">{desc2}</span>
          </p>
        </div>

        <div className="flex justify-center my-8">
          <img
            src={image}
            alt="user avater"
            loading="lazy"
            width={200}
            height={190}
            className="rounded-full"
          ></img>
        </div>
      </div>

      <div>{formType === "login" ? <LoginForm /> : <SignupForm />}</div>

      <div>
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-black"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">
            or
          </p>
          <div className="h-[1px] w-full bg-black"></div>
        </div>

        <button className="bg-[#A8DADC] w-full flex items-center justify-center rounded-[8px] font-medium text-[#E63946] border-black-700 border px-[12px] py-[8px] gap-x-2 mt-6">
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Templete;
