import { useEffect, useState } from "react";
import { getAllUsers } from "../api";
import LoginForm from "./LoginForm";

function LoginPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <h1>Select your today’s persona</h1>
      <div className="user-container">
        {isLoading ? <p>Loading...</p> : <LoginForm users={users} />}
      </div>
    </section>
  );
}

export default LoginPage;
