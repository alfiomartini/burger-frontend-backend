import { render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import { Ingredients } from "../../components/ingredients/Ingredients";
import * as http from "../../api/fetchApis";
import { Ingredient } from "../../interfaces";

const mockSetCurrentIngredient = jest.fn();
const mockGetIngredients = jest.spyOn(http, "getIngredients");
mockGetIngredients.mockImplementation(() =>
  Promise.resolve([
    {
      id: "1",
      name: "pickles",
      quantity: 230,
      description: "grams",
    },
    {
      id: "2",
      name: "onion",
      quantity: 150,
      description: "grams",
    },
  ]),
);

describe("<Ingredients />", () => {
  test("it should render Ingredients List and Add Ingredients Form", async () => {
    render(
      <Ingredients
        currentIngredient={{} as Ingredient}
        setCurrentIngredient={mockSetCurrentIngredient}
      />,
    );

    expect(await screen.findByText(/ingredients list/i)).toBeInTheDocument();
    expect(await screen.findByText(/add ingredient form/i)).toBeInTheDocument();
  });

  test("it should render Ingredients List and Update Ingredients Form", async () => {
    const mockIngredient: Ingredient = {
      id: "id",
      name: "name",
      quantity: 100,
      description: "description",
    };

    render(
      <Ingredients
        currentIngredient={mockIngredient}
        setCurrentIngredient={mockSetCurrentIngredient}
      />,
    );
    expect(await screen.findByText(/ingredients list/i)).toBeInTheDocument();
    expect(await screen.findByText(/edit ingredient form/i)).toBeInTheDocument();
  });

  test("it should call the apis getIngredients (inside useEffect)", async () => {
    render(
      <Ingredients
        currentIngredient={{} as Ingredient}
        setCurrentIngredient={mockSetCurrentIngredient}
      />,
    );

    await waitFor(() => expect(mockGetIngredients).toHaveBeenCalled());
  });

  test("it should render the list of ingredients correctly", async () => {
    render(
      <Ingredients
        currentIngredient={{} as Ingredient}
        setCurrentIngredient={mockSetCurrentIngredient}
      />,
    );
    const list = await screen.findByRole("list", { name: /ingredients-list/ });

    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(2);

    expect(screen.getByText(/onion/)).toBeInTheDocument();
    expect(screen.getByText(/pickles/)).toBeInTheDocument();
  });
});
