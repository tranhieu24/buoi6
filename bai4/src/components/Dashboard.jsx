import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      {/* Menu con */}
      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="orders">Orders</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* Nơi hiển thị trang con */}
      <Outlet />
    </div>
  );
}

export default Dashboard;