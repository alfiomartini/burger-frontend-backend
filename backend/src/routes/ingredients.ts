import express from "express";
import {
  getAllIngredients,
  postIngredient,
  getIngredientId,
  deleteIngredientId,
  patchIngredientId,
} from "../controllers/ingredients";

const router = express.Router();

router.get("/", getAllIngredients);

router.post("/", postIngredient);

router.get("/:id", getIngredientId);

router.delete("/:id", deleteIngredientId);

router.patch("/:id", patchIngredientId);

export default router;
