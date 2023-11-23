import bgImage from '../assets/pic1.avif';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


function Templete({title, desc1, desc2, image,formType, setLoggedin}) {
    return (
      <div>
        <div>
          <div>
            <h1>{title}</h1>
            <p>
              <span>{desc1}</span>
              <span>{desc2}</span>
            </p>
          </div>

          <div>
            {formType === "login" ? <LoginForm setLoggedin= {setLoggedin}/> : <SignupForm setLoggedin={setLoggedin}/>}
          </div>

          <div>
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <button>Continue with Google</button>
        </div>

        <div>
            <img src={bgImage} alt='background' width={558} height={504} loading='lazy'></img>
            <img src={image} alt='user avater' width={548} height={494} loading='lazy'></img>
        </div>

      </div>
    );
}

export default Templete;