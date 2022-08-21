import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import './EntryPage.css'

const EntryPage: React.FC = () => {
  return (
    <div className="entry_page_container">
        <Link to={"/admin"}>
          <Button type="primary">Login as Administrator</Button>
        </Link>
        <Link to={"/user"}>
          <Button type="primary">Login as User</Button>
        </Link>
    </div>
  );
};

export default EntryPage;
