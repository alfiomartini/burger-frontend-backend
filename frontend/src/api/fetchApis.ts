import { client } from "./httpClient";
import { Ingredient, Burger, WeakIngredient } from "../interfaces";

export async function getIngredients(): Promise<Ingredient[]> {
  const response = await client.get("/ingredient");
  return response.data as Ingredient[];
}

export async function getBurgers(): Promise<Burger[]> {
  const response = await client.get("/burger");
  return response.data as Burger[];
}

export async function createIngredient(item: WeakIngredient): Promise<Ingredient> {
  const response = await client.post("/ingredient", item);
  return response.data as Ingredient;
}

export async function deleteIngredient(id: string): Promise<Ingredient> {
  const response = await client.delete(`/ingredient/${id}`);
  return response.data as Ingredient;
}

export async function updateIngredient(item: Ingredient): Promise<Ingredient> {
  const response = await client.patch(`/ingredient/${item.id}`, item);
  return response.data as Ingredient;
}
