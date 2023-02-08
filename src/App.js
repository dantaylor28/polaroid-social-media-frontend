import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./api/axiosDefaults";
import CreateAccountForm from "./pages/auth/CreateAccountForm";
import SignInForm from "./pages/auth/SignInForm";
import CreatePostForm from "./pages/posts/CreatePostForm";
import PostDetail from "./pages/posts/PostDetail";
import PostList from "./pages/posts/PostList";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.HomePage}>
        <Switch>
          <Route exact path="/" render={() => <PostList message="Nothing to show.. Please adjust your search!" />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route
            exact
            path="/create/account"
            render={() => <CreateAccountForm />}
          />
          <Route exact path="/create/post" render={() => <CreatePostForm />} />
          <Route exact path="/posts/:id" render={() => <PostDetail />} />
          <Route render={() => <p>Page not found..</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
