import { useState, useEffect, Dispatch } from "react";
import { WeakIngredient, Ingredient } from "../../interfaces";
import { Badge } from "../badge/Badge";
import { FormIngredient } from "../formIngredient/FormIngredient";
import { isEmpty } from "../../utilities";
import styled from "styled-components";
import {
  createIngredient,
  deleteIngredient,
  getIngredients,
  updateIngredient,
} from "../../api/fetchApis";
import { handleApiError } from "../../utilities";

interface Props {
  currentIngredient: Ingredient;
  setCurrentIngredient: Dispatch<Ingredient>;
}

export function Ingredients({ currentIngredient, setCurrentIngredient }: Props) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  async function addIngredient(item: WeakIngredient) {
    try {
      const newIngredient = await createIngredient(item);
      const newIngredients = [...ingredients, newIngredient];
      newIngredients.sort((a, b) => a.name.localeCompare(b.name));
      setIngredients(newIngredients);
    } catch (error) {
      handleApiError(error);
    }
  }

  async function removeIngredient(id: string) {
    try {
      await deleteIngredient(id);
      const newIngredients = ingredients.filter((item) => item.id !== id);
      setIngredients(newIngredients);
    } catch (error) {
      handleApiError(error);
    }
  }

  async function editIngredient(item: Ingredient) {
    try {
      const updatedIngredient = await updateIngredient(item);
      const newIngredients = [
        ...ingredients.filter((elem) => elem.id !== item.id),
        updatedIngredient,
      ];
      newIngredients.sort((a, b) => a.name.localeCompare(b.name));
      setIngredients(newIngredients);
    } catch (error) {
      handleApiError(error);
    }
  }

  useEffect(() => {
    let active = true;
    const fetchIngredients = async () => {
      try {
        const _ingredients: Ingredient[] = await getIngredients();
        if (active) {
          _ingredients.sort((a, b) => a.name.localeCompare(b.name));
          setIngredients(_ingredients);
        }
      } catch (error) {
        handleApiError(error);
      }
    };

    fetchIngredients();

    return () => {
      active = false;
      console.log("Cleaning fetch Ingredients");
    };
  }, []);

  return (
    <IngredientsContainer>
      <div>
        <IngredientsList>
          <h2>Ingredients List</h2>
          <IngredientItems role="list" aria-label="ingredients-list">
            {ingredients.map((item: Ingredient) => (
              <Badge
                {...item}
                key={item.id}
                removeIngredient={removeIngredient}
                setCurrentIngredient={setCurrentIngredient}
                role="listitem"
              />
            ))}
          </IngredientItems>
        </IngredientsList>
      </div>
      {!isEmpty(currentIngredient) ? (
        <FormIngredient
          addIngredient={addIngredient}
          title="Edit Ingredient Form"
          editIngredient={editIngredient}
          name_={currentIngredient.name}
          quantity_={String(currentIngredient.quantity)}
          description_={currentIngredient.description}
          currentIngredient={currentIngredient}
          setCurrentIngredient={setCurrentIngredient}
        />
      ) : (
        <FormIngredient
          title="Add Ingredient Form"
          addIngredient={addIngredient}
          editIngredient={editIngredient}
          currentIngredient={currentIngredient}
          setCurrentIngredient={setCurrentIngredient}
        />
      )}
    </IngredientsContainer>
  );
}

const IngredientsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  justify-content: space-around;
  align-content: center;
  height: 60vh;
`;

const IngredientsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`;

const IngredientItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
