import Templete from "../Components/Templete";
import signupImage from "../assets/user.png";

function SignUp() {
  return (
    <Templete
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow and beyond"
      desc2="Education to future proof your career"
      formType="signup"
      image={signupImage}
    />
  );
}

export default SignUp;
