import "./App.css";
import { ComponentMemo } from "./components/memo";
import { ComponentRef } from "./components/ref";
import { ComponenState } from "./components/state";
import UserProvider from "./context/user";
import { ComponentReducer } from "./components/reducer";
import { ComponentCallback } from "./components/callback";
import { ComponentCounter } from "./components/counter";

function App() {
  return (
    <>
      <UserProvider>
        <ComponenState />
        {/* <ComponentRef /> */}
        {/* <ComponentMemo /> */}
        {/* <ComponentReducer /> */}
        {/* <ComponentCallback /> */}
        {/* <ComponentCounter /> */}
      </UserProvider>
    </>
  );
}

export default App;
