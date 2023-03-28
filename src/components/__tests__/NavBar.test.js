import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

test("NavBar renders correctly", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  //   screen.debug()
  const SignInLink = screen.getByRole("link", { name: "Sign In" });
  expect(SignInLink).toBeInTheDocument();
});

test("Renders link to user profile", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const ProfileLink = await screen.findByText("Profile")
  expect(ProfileLink).toBeInTheDocument()
  
});
