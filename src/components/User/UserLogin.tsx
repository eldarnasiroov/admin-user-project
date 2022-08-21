import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Tooltip, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import './UserLogin.css';

const UserLogin: React.FC = () => {
  return (
    <div className="user_login_container">
      <Space direction="vertical">
        <Typography>
          <Typography.Title level={4}>User</Typography.Title>
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
        <Button type="primary">Log In</Button>
        <div className="separator"></div>
        <span>Don't have an account?</span>
        <Space>
          <Link to="/user/create-account">
            <Button type="primary">Create new account</Button>
          </Link>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </Space>
      </Space>
    </div>
  );
};

export default UserLogin;
