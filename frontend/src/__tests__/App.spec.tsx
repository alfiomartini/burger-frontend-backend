import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "../App";

jest.mock("../pages/Home", () => ({
  __esModule: true,
  Home: () => <div>Mock Landing Page</div>,
}));

jest.mock("../components/burgers/Burgers", () => ({
  __esModule: true,
  Burgers: () => <div>Mock Component Burgers</div>,
}));

jest.mock("../components/orders/Orders", () => ({
  __esModule: true,
  Orders: () => <div>Mock Component Orders</div>,
}));

jest.mock("../components/ingredients/Ingredients", () => ({
  __esModule: true,
  Ingredients: () => <div>Mock Component Ingredients</div>,
}));

describe("<App />", () => {
  it("should render the home page", () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/mock landing page/i)).toBeInTheDocument();
  });

  it("should render the Burgers Page", () => {
    render(
      <MemoryRouter initialEntries={["/burgers"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/mock component burgers/i)).toBeInTheDocument();
  });

  it("should render the Orders Page", () => {
    render(
      <MemoryRouter initialEntries={["/orders"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/mock component orders/i)).toBeInTheDocument();
  });

  it("should render the Ingredients Page", () => {
    render(
      <MemoryRouter initialEntries={["/ingredients"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/mock component ingredients/i)).toBeInTheDocument();
  });
});
