import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((x, i) => {
          return (
            <li key={x.id} id={x.id}>
              {x.name} ({x.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
