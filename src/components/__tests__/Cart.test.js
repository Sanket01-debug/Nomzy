import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should LOad Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("ROLLS (13)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(13);
  expect(screen.getByText("Cart (0 - Items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 - Items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2 - Items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearBtn);

  expect(screen.getAllByTestId("foodItems").length).toBe(13);

  expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
});