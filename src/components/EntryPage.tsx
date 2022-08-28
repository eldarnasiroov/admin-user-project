import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import './EntryPage.css'

const EntryPage: React.FC = () => {
  return (
    <div className="entry_page_wrapper">
      <div className="entry_page_container">
          <Link to={"/admin"}>
            <Button style={{width: '200px'}} type="primary">Войти как Администратор</Button>
          </Link>
          <Link to={"/user"}>
            <Button style={{width: '200px'}} type="primary">Войти как Пользователь</Button>
          </Link>
      </div>
    </div>
  );
};

export default EntryPage;
