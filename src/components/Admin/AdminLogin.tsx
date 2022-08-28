import React, { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";
import './AdminLogin.css';
import { useAppDispatch } from "../../hook";
import { adminLogin } from "../../features/adminDataSlice";

const AdminLogin: React.FC = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const adminLoginHandler = () => {
    const loginData = {
      username,
      password
    }
    dispatch(adminLogin(loginData));
  }
  return (
    <div className="admin_login_container">
      <Space direction="vertical">
        <Typography>
            <Typography.Title level={5}>Администратор</Typography.Title>
        </Typography>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Имя пользователя"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Введите имя пользователя">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Space>
          <Link onClick={adminLoginHandler} to='/admin/main-page'>
            <Button type="primary">Войти</Button>
          </Link>
          <Link to="/">
            <Button>Назад</Button>
          </Link>
        </Space>
      </Space>
    </div>
  );
};

export default AdminLogin;
