import React, { useEffect } from "react";
import { downloadData } from "../../../features/menuSlice";
import { useAppDispatch, useAppSelector } from "../../../hook";
import "./UserMainPage.css";

const UserMainPage: React.FC = () => {
  const permission = useAppSelector((state) => state.user.permission);
  const data = useAppSelector((state) => state.menu.menu[0]?.name);
  console.log(data);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(downloadData());
  }, []);
    
    return (
      <div>
        {!permission ? '' : 'NET DOSTUPE PIDOR'}
      </div>
    );
  
};
export default UserMainPage;
