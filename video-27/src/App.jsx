// import { Sibling, State } from "./Components/hooks/State"
import {State } from "./Components/hooks/State"

export const App =()=>{
  return(
    <>
    <State/>
    <Sibling/>
    </>
  )
}

function Sibling() {
  console.log("Sibling components rendered")
  return (
      <div>
          <h2>Child Component</h2>
      </div>
  );
}