import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../../components/header/Header";
import { BrowserRouter } from "react-router-dom";

describe("<Header />", () => {
  it("should render appropriately", () => {
    render(<Header />, { wrapper: BrowserRouter });

    const logo = screen.getByRole("link", { name: /burger world/i });
    expect(logo).toBeInTheDocument();

    const burgers = screen.getByRole("link", { name: /burgers/i });
    expect(burgers).toBeInTheDocument();

    const ingredients = screen.getByRole("link", { name: /ingredients/i });
    expect(ingredients).toBeInTheDocument();

    const orders = screen.getByRole("link", { name: /orders/i });
    expect(orders).toBeInTheDocument();
  });

  it("should have the correct href: Logo", async () => {
    render(<Header />, { wrapper: BrowserRouter });

    const logo = screen.getByRole("link", { name: /burger world/i });
    expect(logo).toHaveAttribute("href", "/");
  });

  it("should have the correct href: Burgers", async () => {
    render(<Header />, { wrapper: BrowserRouter });

    const burgers = screen.getByRole("link", { name: /burgers/i });
    expect(burgers).toHaveAttribute("href", "/burgers");
  });

  it("should have the correct href: Ingredients", async () => {
    render(<Header />, { wrapper: BrowserRouter });

    const ingredients = screen.getByRole("link", { name: /ingredients/i });
    expect(ingredients).toHaveAttribute("href", "/ingredients");
  });

  it("should have the correct href: orders", async () => {
    render(<Header />, { wrapper: BrowserRouter });

    const orders = screen.getByRole("link", { name: /orders/i });
    expect(orders).toHaveAttribute("href", "/orders");
  });
});
