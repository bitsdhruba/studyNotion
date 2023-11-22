


function LoginForm() {
    
        const [formData, setFormData] = useState({ email: "", password: "" });

        function onChangeHandler(event) {
          setFormData((prevData) => {
            return {
              ...prevData,
              [event.target.name]: event.target.value,
            };
          });
        }

        const [showPassword, setShowPassword] = useState(false);
    
    return ( 
        <div>    
            <p>
                <span>title</span>
            </p>
            <p>
                <span>Description 1</span>
                <span>Description 2</span>
            </p>

            <form> 
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
                type={showPassword ? "text" : "passoword"}
                name="password"
                value={formData.password}
                placeholder="Enter your Password"
                />
            </label>
            </form>
        </div>
     );
}

export default LoginForm;