import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import "./AdminError.css";

const AdminError = () => {
  return (
    <div>
      <Space direction="vertical">
        <div className="user_error_container">
          <h1>ADMIN ACCESS DENIED</h1>
        </div>
        <Link to="/admin">
          <Button type="primary">Log In</Button>
        </Link>
      </Space>
    </div>
  );
};

export default AdminError;
