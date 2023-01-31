import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
