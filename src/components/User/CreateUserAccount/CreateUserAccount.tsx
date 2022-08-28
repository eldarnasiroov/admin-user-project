import React, { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Button, Input, message, Space, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";
import './CreateUserAccount.css';
import { useAppDispatch } from "../../../hook";
import { userRegistration } from "../../../features/userDataSlice";

const CreateUserAccount: React.FC = () => {
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationPassword, setVerificationPassword] = useState('');

  const userRegistrationHandler = () => {
    if (firstName && lastName && username && password && verificationPassword) {
      
      const userData = {
        firstName,
        lastName,
        username,
        password,
        verificationPassword
      }
      dispatch(userRegistration(userData));
    } else {
      message.error('Пожалуйста, заполните все необходимые поля');
    }
  }

  return (
    <div className="create_user_container">
      <Typography>
        <Typography.Title>Создание аккаунта Пользователя</Typography.Title>
      </Typography>
      <Space direction="vertical">
        <Space>
          <Input
            onChange={(e) => {setFirstName(e.target.value)}}
            value={firstName}
            placeholder="Имя"
            suffix={
              <Tooltip title={"Имя должно содержать только буквы"}>
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <Input
            onChange={(e) => {setLastName(e.target.value)}}
            value={lastName}
            placeholder="Фамилия"
            suffix={
              <Tooltip title={"Фамилия должна содержать только буквы"}>
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Space>
          <Input
            onChange={(e) => {setUsername(e.target.value)}}
            value={username}
            placeholder="Имя пользователя"
            suffix={
              <Tooltip title={""}>
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        <Input.Password
          onChange={(e) => {setPassword(e.target.value)}}
          value={password}
          placeholder="Новый пароль"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Input.Password
          onChange={(e) => {setVerificationPassword(e.target.value)}}
          value={verificationPassword}
          placeholder="Повторите пароль"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Space>
          <Link to='/user'>
            <Button onClick={userRegistrationHandler} type="primary">Регистрация</Button>
          </Link>
          <Link to="/user">
            <Button>Назад</Button>
          </Link>
        </Space>
      </Space>
    </div>
  );
};
export default CreateUserAccount;
