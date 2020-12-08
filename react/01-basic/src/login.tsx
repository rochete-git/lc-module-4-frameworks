import React from "react";
import { useHistory } from "react-router-dom";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("admin");
  const [password, setPassword] = React.useState("test");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      history.push("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <form onSubmit={handleNavigation}>
      <h2>Lemoncode - Module 4</h2>
      <h3>Framework - React - Basic</h3>
      <div>
        <div>
          <label>Username: </label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Button type="submit" variant="contained" color="primary">Sign in</Button>
    </form>
  );
};
