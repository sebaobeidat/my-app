import { useState, useContext } from "react";
import { UserContext } from "./UserContext.jsx";
export default function Login() {
  const { login, theme } = useContext(UserContext);

  // Local state for the form inputs
  const [form, setForm] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    const { password, ...userInfo } = form; 
    login(userInfo);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <form
          onSubmit={handleLogin}
          className={`card p-4 shadow-sm ${
            theme === "dark" ? "bg-secondary-subtle" : ""
          }`}
        >
          <h2 className="mb-3">Login</h2>

          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={form.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
