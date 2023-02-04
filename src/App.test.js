import { render, screen } from "@testing-library/react";
import { useState } from "react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function login() {
  const [username, setusername] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return;
}

