import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const userData = (data) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, data];
    });
  };

  return (
    <div>
      <AddUser onUserAdded={userData} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
