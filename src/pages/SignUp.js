import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../contexts/toastContext";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    let blankField = undefined;

    if (!firstName || !lastName || !email || !password) {
      for (const key in user) {
        if (user[key] === "" || user[key] === undefined) {
          blankField = key;
          toast.add(`Please add ${blankField.toLowerCase()} field`, "warning");
        }
      }
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");

      toast.add("Registration Successful", "success");
      navigate('/login');
    }
  };
  return (
    <div>
      <div className="sign-up">
        Sign up
        <form className="form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>

            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>

            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

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
            Submit
          </button>
        </form>
      </div>
      <p className="further-action">
        Already have an account? <Link to={"/login"}> Login </Link>
      </p>
    </div>
  );
};

export default SignUp;
