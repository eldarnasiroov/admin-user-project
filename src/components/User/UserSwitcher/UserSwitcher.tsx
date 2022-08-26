import React from "react";
import { useAppSelector } from "../../../hook";
import UserError from "../UserError/UserError";
import "./UserSwitcher.css";
import UserMainPage from "../UserMainPage/UserMenu/UserMainPage";

const UserSwitcher: React.FC = () => {
    const permission = useAppSelector((state) => state.user.usersData.find(user => user.permission));
    const userData = useAppSelector(state => state.user.usersData.find(user => user.permission));
    
    return (
      <div className="switcher">
        {!permission ? <UserError /> : <UserMainPage userData={userData}/>}
      </div>
    );
};
export default UserSwitcher;
