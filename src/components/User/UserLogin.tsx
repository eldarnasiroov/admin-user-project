import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Tooltip, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userLogin } from "../../features/userDataSlice";
import { useAppDispatch } from "../../hook";
import './UserLogin.css';

const UserLogin: React.FC = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userLoginHandler = () => {
    const loginData = {
      username,
      password
    }
    dispatch(userLogin(loginData));
  }

  return (
    <div className="user_login_container">
      <Space direction="vertical">
        <Typography>
          <Typography.Title level={4}>User</Typography.Title>
        </Typography>
        <Input
          onChange={(e) => {setUsername(e.target.value)}}
          value={username}
          placeholder="Username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Enter your username">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <Input.Password
          onChange={(e) => {setPassword(e.target.value)}}
          value={password}
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Link to='main-page'>
          <Button onClick={userLoginHandler} type="primary">Log In</Button>
        </Link>
        <div className="separator"></div>
        <span>Don't have an account?</span>
        <Space>
          <Link to="create-account">
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
