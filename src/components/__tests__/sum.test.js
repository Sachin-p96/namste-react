import { sum } from "../sum"
test("the function sum returns sum of two numbers",()=>{
    const result = sum(3,4);
    //Assertion
    expect(result).toBe(7);
})