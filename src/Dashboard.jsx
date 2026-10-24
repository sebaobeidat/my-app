import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";
import UserInfo from "./UserInfo.jsx";
 
export default function Dashboard() {
  const { user } = useContext(UserContext);
  const initial = user.userName.charAt(0).toUpperCase();
 
  return (
    <div className="mx-auto" style={{ maxWidth: 720 }}>
      <h1 className="mb-1">Dashboard</h1>
      <p className="text-secondary mb-4">
        This is your dashboard. Everything here reads its data from the shared
        context.
      </p>
 
      {/* Welcome card showing the userName from Context */}
      <div className="card border-0 bg-primary text-white shadow-sm mb-4">
        <div className="card-body d-flex align-items-center gap-3 p-4">
          <div
            className="rounded-circle bg-white text-primary fw-bold d-flex align-items-center justify-content-center fs-3"
            style={{ width: 56, height: 56 }}
          >
            {initial}
          </div>
          <div>
            <div className="opacity-75">Welcome back,</div>
            <div className="fs-3 fw-semibold">{user.userName}</div>
          </div>
        </div>
      </div>
 
      <UserInfo />
    </div>
  );
}
 