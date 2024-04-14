import UserClass from "./UserClass";
import { useEffect } from "react";


const About = () => {
    useEffect(() => {
        fetchbala();
      }, []);
    
    const fetchbala = () => {
        console.log('useEffect')
    }
    console.log("reder parent")
    return (
        <>
          <div>
            <h1>About Section</h1>
            <UserClass name="Sachin p"/>
          </div>
        </>
    )
}

export default About; 