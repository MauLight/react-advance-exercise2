import "./App.css";
import { useState, useEffect } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword({
      ...password, value: e.target.value
    })
    if (password.value.length < 8) {

    }
    console.log(password);
  }

  const getIsFormValid = () => {
    console.log("Checking...")
    if (firstName.length > 0 && validateEmail(email) && password.value.length > 8 && (role === "individual" || role === "business")) {
      console.log("VALID!");
      return true;
    }
    else {
      console.log("INVALID!");
      return false;
    }
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  useEffect(() => {
    console.log(validateEmail(email));
  })

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" placeholder="Password" onChange={handlePassword} onBlur={() => setPassword({ ...password, isTouched: true })} value={password.value} />
            {
              password.isTouched && password.value.length < 8 ? <PasswordErrorMessage /> : null
            }
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()} onClick={handleSubmit}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
