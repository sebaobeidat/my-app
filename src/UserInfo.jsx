import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";
export default function UserInfo() {
  const { user, theme } = useContext(UserContext);

  return (
    <div
      className={`card shadow-sm ${
        theme === "dark" ? "bg-secondary-subtle" : ""
      }`}
    >
      <div className="card-header fw-semibold">User Information</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="text-muted">User Name</span>
          <span>{user.userName}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="text-muted">Email</span>
          <span>{user.email}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="text-muted">Phone Number</span>
          <span>{user.phoneNumber}</span>
        </li>
      </ul>
    </div>
  );
}
