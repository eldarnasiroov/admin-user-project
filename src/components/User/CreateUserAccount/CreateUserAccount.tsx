import React, { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Tooltip, Typography } from "antd";
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
    const userData = {
      firstName,
      lastName,
      username,
      password,
      verificationPassword
    }
    dispatch(userRegistration(userData));
  }

  return (
    <div className="create_user_container">
      <Typography>
        <Typography.Title>Create User Account</Typography.Title>
      </Typography>
      <Space direction="vertical">
        <Space>
          <Input
            onChange={(e) => {setFirstName(e.target.value)}}
            value={firstName}
            placeholder="First name"
            suffix={
              <Tooltip title={"Name must contain only letters"}>
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <Input
            onChange={(e) => {setLastName(e.target.value)}}
            value={lastName}
            placeholder="Last name"
            suffix={
              <Tooltip title={"Surname must contain only letters"}>
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Space>
          <Input
            onChange={(e) => {setUsername(e.target.value)}}
            value={username}
            placeholder="Username"
            suffix={
              <Tooltip title={""}>
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        <Input.Password
          onChange={(e) => {setPassword(e.target.value)}}
          value={password}
          placeholder="New password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Input.Password
          onChange={(e) => {setVerificationPassword(e.target.value)}}
          value={verificationPassword}
          placeholder="Confirm password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Space>
          <Button onClick={userRegistrationHandler} type="primary">Sign Up</Button>
          <Link to="/user">
            <Button>Back</Button>
          </Link>
        </Space>
      </Space>
    </div>
  );
};
export default CreateUserAccount;
