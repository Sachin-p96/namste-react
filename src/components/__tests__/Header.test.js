import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import UserContext from "../../utils/UserContext";

test("This Should test loading login button in header Component", () => {
  const setName = jest.fn();
  const name = "Sachin";
  render(
    <BrowserRouter>
      <UserContext.Provider value={setName}>
        <Provider store={appStore}>
          {" "}
          <Header />{" "}
        </Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("This Should test whether login button changes to logout button on click in header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbutton = screen.getByText("Login");
  fireEvent.click(loginbutton);
  const logoutButton = screen.getByText("Logout");
  expect(logoutButton).toBeInTheDocument();
});
