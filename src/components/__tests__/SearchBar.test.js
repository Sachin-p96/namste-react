import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/reslistmockdata.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(() => {
  return Promise.resolve({
    // fetch function returns promise
    json: () => {
      // json the promise

      return Promise.resolve(MOCK_DATA); // r
    },
  });
});

it("should show the search button", async() => {
    await act(async() => {
    render(
    <BrowserRouter> 
    <Body/>

    </BrowserRouter>
    )
    })
    const searchBtn = screen.getByRole("button",{name: "Search"})
    const searchInput = screen.getByTestId("search-input")
    const rescardBeforeSearch = screen.getAllByTestId('res-card')
    expect(rescardBeforeSearch.length).toBe(20)   
    fireEvent.change(searchInput,{target:{value:"burger"}})
    fireEvent.click(searchBtn)
    const rescardAfterSearch = screen.getAllByTestId('res-card')
    expect(rescardAfterSearch.length).toBe(3)
    })

