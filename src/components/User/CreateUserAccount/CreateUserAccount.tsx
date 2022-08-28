import React, { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Button, Input, message, Modal, Space, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";
import './CreateUserAccount.css';
import { useAppDispatch, useAppSelector } from "../../../hook";
import { userRegistration } from "../../../features/userDataSlice";
import UserLogin from "../UserLogin";

const CreateUserAccount: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.user.usersData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationPassword, setVerificationPassword] = useState('');
  const [isFirstnameValid, setIsFirstnameValid] = useState(true);
  const [isLastnameValid, setIsLastnameValid] = useState(true);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const firstnameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    if (!e.target.value) {
      setIsFirstnameValid(false);
      message.error('Поле Имя - обязательно для заполнения');
    } else {
      setIsFirstnameValid(true);
    }
  }

  const lastnameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    if (!e.target.value) {
      setIsLastnameValid(false);
      message.error('Поле Фамилия - обязательно для заполнения');
    } else {
      setIsLastnameValid(true)
    }
  }

  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setIsPasswordValid(false);
      message.error('Поле Пароль - обязательно для заполнения');
    } else {
      setIsPasswordValid(true)
    }
  }

  const confirmPasswordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationPassword(e.target.value);
    if (!e.target.value) {
      setIsConfirmPasswordValid(false);
      message.error('Поле Подтверждения пароля - обязательно для заполнения');
    } else {
      setIsConfirmPasswordValid(true);
    }
  }
  
  const usernameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (!e.target.value) {
      setIsUsernameValid(false);
      message.error('Поле Имя пользователя - обязательно для заполнения');
    } else {
      setIsUsernameValid(true);
    }
    users.map(user => {
      if (user.username === e.target.value) {
        setIsUsernameAvailable(false);
        message.warning(`Имя пользователя ${e.target.value} уже занято.`)
      } else {
        setIsUsernameAvailable(true);
      }
      return user;
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const userRegistrationHandler = () => {
    if (firstName && lastName && username && password && verificationPassword) {
      if (password === verificationPassword) {
        const userData = {
          firstName,
          lastName,
          username,
          password,
          verificationPassword
        }
        dispatch(userRegistration(userData));
        message.success('Аккаунт успешно создан! Попробуйте войти')
        showModal();
      } else {
        setIsConfirmPasswordValid(false);
        setIsPasswordValid(false);
        message.error('Пароли должны совпадать!');
      }
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
            status={isFirstnameValid ? '' : 'error'}
            onChange={(e) => {firstnameInputHandler(e)}}
            value={firstName}
            placeholder="Имя"
            suffix={
              <Tooltip title={"Имя должно содержать только буквы"}>
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <Input
            status={isLastnameValid ? '' : 'error'}
            onChange={(e) => {lastnameInputHandler(e)}}
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
            status={isUsernameAvailable && isUsernameValid ? '' : 'error'}
            onChange={(e) => usernameInputHandler(e)}
            value={username}
            placeholder="Имя пользователя"
            suffix={
              <Tooltip title={""}>
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        <Input.Password
          status={isPasswordValid ? '' : 'error'}
          onChange={(e) => {passwordInputHandler(e)}}
          value={password}
          placeholder="Новый пароль"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Input.Password
          status={isConfirmPasswordValid ? '' : 'error'}
          onChange={(e) => {confirmPasswordInputHandler(e)}}
          value={verificationPassword}
          placeholder="Повторите пароль"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Space>
          <Button onClick={userRegistrationHandler} type="primary">Регистрация</Button>
          <Link to="/user">
            <Button>Назад</Button>
          </Link>
        </Space>
          <Modal closeIcon={<></>} cancelButtonProps={{style: {display: 'none'}}} okButtonProps={{style: {display: 'none'}}} width={1000} title="Аккаунт успешно создан!" visible={isModalVisible}>
            <UserLogin />
        </Modal>
      </Space>
    </div>
  );
};
export default CreateUserAccount;
