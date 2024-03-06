import { Header } from "./components/header/Header";
import { Home } from "./pages/home";
import { Ingredients } from "./components/ingredients/Ingredients";
import { Burgers } from "./components/burgers/Burgers";
import { Orders } from "./components/orders/Orders";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Ingredient } from "./interfaces";

function App() {
  const [currentIngredient, setCurrentIngredient] = useState<Ingredient>({} as Ingredient);

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burgers" element={<Burgers />} />
        <Route
          path="/ingredients"
          element={
            <Ingredients
              currentIngredient={currentIngredient}
              setCurrentIngredient={setCurrentIngredient}
            />
          }
        />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding: 1.5rem;
`;

export default App;
