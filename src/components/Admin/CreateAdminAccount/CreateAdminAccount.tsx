import React from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";

const CreateAdminAccount: React.FC = () => {
  return (
    <div>
        <Typography>
            <Typography.Title>Create Admin Account</Typography.Title>
        </Typography>
      <Space direction="vertical">
        <Space>
        <Input
          placeholder="First name"
          suffix={
            <Tooltip title={"Name must contain only letters"}>
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <Input
          placeholder="Last name"
          suffix={
            <Tooltip title={"Surname must contain only letters"}>
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        </Space>
        <Input.Password
          placeholder="New password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Input.Password
          placeholder="Confirm password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Space>
          <Button type="primary">Sign Up</Button>
          <Link to="/admin">
            <Button>Back</Button>
          </Link>
        </Space>
      </Space>
    </div>
  );
};
export default CreateAdminAccount;
