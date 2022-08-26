import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./UserError.css";

const UserError: React.FC = () => {
  return (
    <div>

    <Space direction="vertical">
      <div className="user_error_container">
        <h1>USER ACCESS DENIED</h1>
      </div>
      <Link to="/user">
        <Button type="primary">Log In</Button>
      </Link>
    </Space>
    </div>
  );
};

export default UserError;
