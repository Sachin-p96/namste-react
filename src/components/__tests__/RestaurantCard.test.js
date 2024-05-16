import { render,screen } from "@testing-library/react"
import RestaurantCard, { cardWithPromoted } from "../RestaurantCard"
import { MOCK_RESTO_DETAILS } from "../mocks/mockdata"
import "@testing-library/jest-dom"

test("it should test whether Restaurantcard gets loaded with props data",() => {
    
    render(<RestaurantCard {...MOCK_RESTO_DETAILS}/>)
    const RestoName = screen.getByText("GetAWay-Ice Creams & Desserts");
    expect(RestoName).toBeInTheDocument()
})

test("it should load a component with the propmoted tag",()=>{
   const RestaurantCardWithPromoted = cardWithPromoted(RestaurantCard);
   render(<RestaurantCardWithPromoted {...MOCK_RESTO_DETAILS} />)
   const labelName = screen.getByText("Promoted")
   expect(labelName).toBeInTheDocument()


})