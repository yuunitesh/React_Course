import React from "react";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <Card key={user.id} className="py-2">
          <li className="my-4 mx-4 border border-gray-500">
            {user.name} (({user.age}) years old)
          </li>
        </Card>
      ))}
    </ul>
  );
};

export default UsersList;
