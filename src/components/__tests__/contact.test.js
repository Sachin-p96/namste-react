import { render, screen } from "@testing-library/react"
import Contactus from "../Contactus"
import  "@testing-library/jest-dom"
//describe method is there to gropup alll the test cases read it out
test("should load Contact us Component",()=>{
    render(<Contactus />)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument()
})

