import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.HomePage}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/signin" render={() => <h1>Sign In</h1>} />
          <Route path="/create/account" render={() => <h1>Create Account</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
