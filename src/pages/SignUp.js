import Templete from '../Components/Templete';
import signupImage from '../assets/login_image.webp'

function SignUp({setLoggedin}) {
    return (
      <Templete
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow and beyond"
        desc2="Education to future proof your career"
        formType="signup"
        setLoggedin={setLoggedin}
        image={signupImage}
      />
    );
}

export default SignUp;