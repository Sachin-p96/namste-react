import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError()
    return (
        <>
          <div>
            <h1>Oops!!!</h1>
            <h1>Something went Wrong !!!!!</h1>
            <h1>{error.data}</h1>
          </div>
        </>
    )
}
export default Error;