import { Dispatch } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { Ingredient } from "../../interfaces";
import styled from "styled-components";

interface Props {
  name: string;
  id: string;
  description: string;
  quantity: number;
  removeIngredient: (id: string) => void;
  setCurrentIngredient: Dispatch<Ingredient>;
  role?: string;
}

export function Badge({
  name,
  id,
  quantity,
  description,
  removeIngredient,
  setCurrentIngredient,
  ...rest
}: Props) {
  return (
    <BadgeContainer {...rest}>
      {name} ({`${quantity} ${description}`}){" "}
      <BadgeIcons>
        <CiEdit
          aria-label="badge-edit"
          size="1.3em"
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentIngredient({ name, id, quantity, description })}
        />{" "}
        <RiDeleteBinLine
          aria-label="badge-delete"
          size="1.3em"
          style={{ cursor: "pointer" }}
          onClick={() => removeIngredient(id)}
        />
      </BadgeIcons>
    </BadgeContainer>
  );
}

const BadgeContainer = styled.span`
  padding: 5px 10px;
  border-radius: 8px;
  background-color: lightsteelblue;
  color: black;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const BadgeIcons = styled.span`
  display: flex;
  gap: 10px;
`;
