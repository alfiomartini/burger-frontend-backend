import { Ingredient } from "../interfaces";
import axios from "axios";

export function isEmpty(obj: Ingredient) {
  if (Object.keys(obj).length === 0) return true;
  return false;
}

export function handleApiError(error: unknown) {
  if (axios.isAxiosError(error)) {
    console.log("Axios Error:", error.message);
  } else if (error instanceof Error) {
    console.log("Error instance", error.message);
  } else {
    console.log("Unknown error type", error);
  }
}
