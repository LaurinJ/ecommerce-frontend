import React, { useContext } from "react";
import CartHeader from "../components/CartHeader";
import Button from "../components/Button";
import CartProvider from "../context/CartProvider";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const addItem = () => {
  expect(screen.getByTestId("add-button")).toBeInTheDocument();
  const button = screen.getByTestId("add-button");
  // add item
  button.click();
};
const removeItem = () => {
  expect(screen.getByTestId("remove-product")).toBeInTheDocument();
  const remove = screen.getByTestId("remove-product");
  // delete item
  remove.click();
};

beforeEach(() => {
  render(
    <CartProvider>
      <CartHeader />
      <Button />
    </CartProvider>
  );
});

describe("Cart", () => {
  it("renders a cart", async () => {
    // check if all components are rendered
    expect(screen.getByTestId("cart")).toBeInTheDocument();
    expect(screen.getByText("0 ks - 0 Kč")).toBeInTheDocument();
  });

  it("add cart item", async () => {
    addItem();
    // check if an item is added
    expect(screen.getByText("Počet produktů: 1")).toBeInTheDocument();
    expect(screen.getByText("item")).toBeInTheDocument();
    expect(screen.getAllByText("100 Kč")[0]).toBeInTheDocument();
  });

  it("remove cart item", async () => {
    addItem();
    expect(screen.getByText("Počet produktů: 1")).toBeInTheDocument();
    removeItem();
    // check if an item is deleted
    expect(screen.getByText("0 ks - 0 Kč")).toBeInTheDocument();
    expect(screen.getByText("Počet produktů: 0")).toBeInTheDocument();
  });
});
