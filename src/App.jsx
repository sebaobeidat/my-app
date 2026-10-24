import { useState } from "react";
import { UserContext } from "./UserContext.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
 
const emptyUser = { userName: "", email: "", phoneNumber: "" };
 
export default function App() {
  const [user, setUser] = useState(emptyUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");
 
  const login = (userInfo) => {
    setUser(userInfo); 
    setIsLoggedIn(true);
  };
 
  const logout = () => {
    setUser(emptyUser);
    setIsLoggedIn(false);
  };
 
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
 
  const value = { user, isLoggedIn, login, logout, theme, toggleTheme };
 
  const themeStyles =
    theme === "light"
      ? { backgroundColor: "#f8f9fa", color: "#212529" }
      : { backgroundColor: "#212529", color: "#f8f9fa" };
 
  return (
    <UserContext.Provider value={value}>
      <div
        data-bs-theme={theme}
        style={{ minHeight: "100vh", ...themeStyles }}
      >
        <nav className="navbar border-bottom mb-4 bg-body-tertiary">
          <div className="container">
            <span className="navbar-brand fw-bold mb-0">My App</span>
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                onClick={toggleTheme}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
              {isLoggedIn && (
                <button
                  className="btn btn-sm btn-outline-danger rounded-pill px-3"
                  onClick={logout}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </nav>
 
        <div className="container">
          {isLoggedIn ? <Dashboard /> : <Login />}
        </div>
      </div>
    </UserContext.Provider>
  );
}