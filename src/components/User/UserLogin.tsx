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
          <Typography.Title level={4}>Пользователь</Typography.Title>
        </Typography>
        <Input
          onChange={(e) => {setUsername(e.target.value)}}
          value={username}
          placeholder="Имя пользователя"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Введите имя пользователя">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <Input.Password
          onChange={(e) => {setPassword(e.target.value)}}
          value={password}
          placeholder="Пароль"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Link to='/user/main-page'>
          <Button onClick={userLoginHandler} type="primary">Вход</Button>
        </Link>
        <div className="user_separator"></div>
        <span>Ещё не зарегистрированы?</span>
        <Space>
          <Link to="create-account">
            <Button type="primary">Создать новый аккаунт</Button>
          </Link>
          <Link to="/">
            <Button>На главную</Button>
          </Link>
        </Space>
      </Space>
    </div>
  );
};

export default UserLogin;
