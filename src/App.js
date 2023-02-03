import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./api/axiosDefaults";
import CreateAccountForm from "./pages/auth/CreateAccountForm";
import SignInForm from "./pages/auth/SignInForm";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = useContext();
export const SetCurrentUserContext = useContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.HomePage}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/signin" render={() => <SignInForm />} />
          <Route path="/create/account" render={() => <CreateAccountForm />} />
          <Route render={() => <p>Page not found..</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
