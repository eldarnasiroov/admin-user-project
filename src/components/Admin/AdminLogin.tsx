import React from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";
import './AdminLogin.css';

const AdminLogin: React.FC = () => {
  return (
    <div className="admin_login_container">
      <Space direction="vertical">
        <Typography>
            <Typography.Title level={5}>Administrator</Typography.Title>
        </Typography>
        <Input
          placeholder="Username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Enter your username">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <Input.Password
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Space>
          <Button type="primary">Log In</Button>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </Space>

        {/* {Create admin account} */}

        {/* <span>Don't have an account?</span>
        <Space>
        <Link to="/admin/create-account">
          <Button type="primary">Create new account</Button>
        </Link>
        <Link to="/">
          <Button>Back</Button>
        </Link>
        </Space> */}
      </Space>
    </div>
  );
};

export default AdminLogin;
