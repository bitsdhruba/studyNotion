import Templete from "../Components/Templete";
import loginImage from "../assets/login_image.webp";

function Login() {
  return (
    <Templete
      title="Welcome back"
      desc1="Build skills for today, tomorrow and beyond"
      desc2="Education to future proof your career"
      formType="login"
      image={loginImage}
    />
  );
}

export default Login;
