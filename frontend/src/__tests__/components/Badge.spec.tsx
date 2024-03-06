import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Badge } from "../../components/badge/Badge";

describe("<Badge />", () => {
  const mockRemoveIngredient = jest.fn();
  const mockSetCurrentIngredient = jest.fn();
  it("should render ingredient data", () => {
    render(
      <Badge
        name="name"
        id="id"
        quantity={100}
        description="description"
        removeIngredient={mockRemoveIngredient}
        setCurrentIngredient={mockSetCurrentIngredient}
      />,
    );
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });

  it("should invoke removeIngredient", async () => {
    const user = userEvent.setup();

    render(
      <Badge
        name="name"
        id="id"
        quantity={100}
        description="description"
        removeIngredient={mockRemoveIngredient}
        setCurrentIngredient={mockSetCurrentIngredient}
      />,
    );

    const badgeRemove = screen.getByLabelText("badge-delete");
    await user.click(badgeRemove);

    expect(mockRemoveIngredient).toHaveBeenCalledTimes(1);
  });

  it("should invoke setCurrentIngredient", async () => {
    const user = userEvent.setup();

    render(
      <Badge
        name="name"
        id="id"
        quantity={100}
        description="description"
        removeIngredient={mockRemoveIngredient}
        setCurrentIngredient={mockSetCurrentIngredient}
      />,
    );

    const badgeEdit = screen.getByLabelText("badge-edit");
    await user.click(badgeEdit);

    expect(mockSetCurrentIngredient).toHaveBeenCalledTimes(1);
  });
});
