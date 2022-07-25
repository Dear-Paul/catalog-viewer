import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "../contexts/toastContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const userCredentials = {
      email,
      password,
    };
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!email || !password) {
      for (const key in userCredentials) {
        if (userCredentials[key] === "" || userCredentials[key] === undefined) {
          toast.add(`Please input ${key}`, "warning");
        }
      }
    } else if (!savedUser) {
      toast.add("User needs to register first", "warning");
    } else {
      // if (savedUser) {
        if (email === savedUser.email && password === savedUser.password) {
          toast.add("Login Successful", "success");
          navigate("/dashboard");
        } else {
          toast.add("Incorrect credentials", "danger");
        }
      // }
    }
  };
  return (
    <div>
      <div className="login">
        <form className="form-login" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">Password</label>

            <input
              type="password"
              name="firstName"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="submit" type="submit">
            Login
          </button>
        </form>
      </div>

      <p className="further-action">
        Don't have an account? Sign up<Link to={"/"}> Here </Link>
      </p>
    </div>
  );
};

export default Login;
